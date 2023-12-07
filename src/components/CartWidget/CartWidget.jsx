import React, { useContext }  from "react";
import "../CartWidget/CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import zapatillaLogo from "/img/zapatilla-logo2.jpg";
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { getTotalShoes } = useContext(CartContext)

    return (
        <nav className="cart-widget">
            <img src={zapatillaLogo} alt="Zapatilla Logo" />
            <div className="cart-info">
                <BsFillCartFill />
                <p>{getTotalShoes()}</p>
            </div>
        </nav>
    )
}

export default CartWidget;

