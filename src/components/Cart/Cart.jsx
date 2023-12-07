import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from "../Item/Item";
import "./cart.css";
import { Link } from 'react-router-dom';

const Carro = () => {
    const { cartShoe, clearCart,removeShoe,getTotalShoes } = useContext(CartContext);


    return (
        <div className='div-carro'>
            <h1>Carro de Compras </h1>
            <ul>
                {
                    cartShoe && cartShoe.length > 0 ? (
                        cartShoe.map((item) => (

                            <li key={item.shoe.id}>
                                <Item shoe={item.shoe} />
                                <button className='button-cart' onClick={() => removeShoe(item.shoe.id)}>Eliminar del Carrito</button>
                            </li>
                        ))
                    ) : (
                        <h3>No hay elementos en el carrito!</h3>
                    )
                }

            </ul>
            {cartShoe && cartShoe.length > 0 && (
                <button onClick={clearCart}>Limpiar Carrito</button> 
            )}
            {cartShoe && cartShoe.length > 0 && (
                <Link to={"/Checkout"}>Finalizar Compra</Link>
            )}
        </div >
    );
};

export default Carro;
