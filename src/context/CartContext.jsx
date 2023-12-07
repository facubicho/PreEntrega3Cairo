import React, { useState, createContext } from 'react';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

   
    const [cartShoe, setCartShoe] = useState([]);

    const isInCart = (itemId) => {
        return cartShoe.some((i) => i.shoe.id === itemId);
    }
  
    const addShoeToCart = (shoe, cantidad) => {
        if (!isInCart(shoe.id)) {
            setCartShoe((prev) => [...prev, { shoe, cantidad }])
        } else {
            console.log("No se puede agregar otra zapatilla ")
        }
    }

    const clearCart = () => {
        setCartShoe([]);
    }

    const getTotalShoes = () => {
        let cantidad = 0
        cartShoe.forEach((zapa) => cantidad += zapa.cantidad)
        return cantidad
    }

    const removeShoe = (id) => {   
        const filtrarCarrito = cartShoe.filter((s) => s.shoe.id !== id)
        setCartShoe(filtrarCarrito)
    }

    const TotalPorShoes = () => {
        let total = 0;
    
        cartShoe.forEach((zapa) => {
            const { cantidad, shoe } = zapa;
            if (shoe && typeof shoe.cantidad === 'number' && typeof shoe.precio === 'number') {
                total += cantidad * shoe.precio;
            }
        });
        return total.toFixed(2);
    }

    return (
        <CartContext.Provider value={
            {
                cartShoe,
                setCartShoe,
                addShoeToCart,
                isInCart,
                getTotalShoes,
                removeShoe,
                clearCart,
                TotalPorShoes
            }
        }>
            {children}
        </CartContext.Provider>
    );
};