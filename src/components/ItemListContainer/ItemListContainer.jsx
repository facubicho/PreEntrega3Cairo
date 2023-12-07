import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [shoes, setShoes] = useState([]);
    const { categoryId } = useParams();
    const db = getFirestore();
    const collectionRef = collection(db, 'zapatillas');


    useEffect(() => {
        const fetchData = async () => {

            try {
                const snapshot = await getDocs(collectionRef);

                if (snapshot.docs.length > 0) {
             
                    const filteredShoes = categoryId
                        ? snapshot.docs
                            .filter((doc) => doc.data().categoria === categoryId)
                            .map((doc) => ({ id: doc.id, ...doc.data() }))
                        : snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                    setShoes(filteredShoes);

                } else {
                    setShoes([]);
                }

            } catch (error) {
                console.error('Error al incorporar informacion desde Firebase:', error);
            }
        };

        fetchData();
    }, [categoryId])



    return (
        <>
            {shoes.length == 0
                ? <h1>CARGANDO...</h1>
                : <ItemList shoes={shoes} />}
        </>
    );
};

export default ItemListContainer;