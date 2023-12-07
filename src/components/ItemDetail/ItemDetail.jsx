import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css"



const ItemDetail = ({ shoe }) => {

    const { addShoeToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);


    const onAdd = (cant) => {
        setQuantity(cant)
        addShoeToCart(shoe, cant)
    }

    return (
        <div className='div-detalle'>
            <img src={shoe.img} alt={shoe.nombre} />
            <h1>{shoe.nombre}</h1>
            <p>Stock: {shoe.cantidad}</p>
            <p>Precio: {shoe.precio}</p>
            <p>Categoria: {shoe.categoria}</p>
            <p>Descripción: {shoe.descripcion}</p>


            {quantity
                == 0 ?
                <ItemCount initial={1} stock={shoe.cantidad} onAdd={onAdd} />
                :
                <Link to={"/Carro"}>Ir al carrito</Link>
            }

        </div>
    );
};

export default ItemDetail;