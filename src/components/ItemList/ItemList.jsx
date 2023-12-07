import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"

const ItemList = ({ shoes }) => {

    return (
        <>
            <div className='contiene-tarjetas'>
                {shoes.map((shoe) => (
                <Item key={shoe.id} shoe={shoe} />
            ))}
            </div>

        </>
    );
};

export default ItemList;