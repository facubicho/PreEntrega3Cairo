import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ shoe }) => {

    return (
        <>
            <div className='contenedor'>
                
                <Link to={`/item/${shoe.id}`}>
                    <h1> {shoe.nombre}</h1>
                </Link>

                <img src={shoe.img} alt={shoe.nombre} />
            </div>
        </>
    );
};

export default Item;



  

        
