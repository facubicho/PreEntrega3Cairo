import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [shoe, setShoe] = useState(null)
    const { idShoe } = useParams()
    const db = getFirestore();
    const collectionRef = collection(db, 'zapatillas');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const snapshot = await getDocs(collectionRef);
    
            if (snapshot.docs.length > 0) {
              
              const foundShoe = snapshot.docs.find((doc) => doc.id === idShoe);
    
              if (foundShoe) {
                const shoeData = { id: foundShoe.id, ...foundShoe.data() };
                setShoe(shoeData);
              } 

            } else {
              console.log('No hay documentos en la colección');
            }
          } catch (error) {
            console.error('Error al incorporar informacion desde Firebase:', error);
          }
        };
    
        fetchData();
      }, [collectionRef, idShoe]);

    return (
        <div>
            {
                shoe 
                ? <ItemDetail shoe={shoe} /> 
                : <p>CARGANDO..</p>
            }
        </div>
    );
};

export default ItemDetailContainer;