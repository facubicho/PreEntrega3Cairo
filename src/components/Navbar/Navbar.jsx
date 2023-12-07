import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'; 
import zapatillaLogo from "/img/zapatilla-logo2.jpg";

const Navbar = () => {
    const enlaces = [
        "Nike",
        "Adidas",
        "Puma",
        "New Balance",
        "Reebok",
        "Promociones",
        "Sobre Nosotros",
        "Carro"
    ];

    return (
        <div className="navbar-container">
            <Link to={"/"} className="logo">
                <CartWidget />
            </Link>

            <ul className="nav-links">
                {enlaces.map((etiqueta, id) => (
                    <li key={id}>
                        <Link to={`${etiqueta}`} className="nav-link">
                            {etiqueta}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
