import React from 'react';

const Food =({food, price, qty, uoi, image, keys}) =>{

    return(
        <div className="food" key={keys.toString()}>
            <img className="item-img" alt={food} src={image}/>
            
            <dl>
                <dt>Food:</dt>
                <dd>{food}</dd> 
                <dt>Price</dt>
                <dd>£{price}</dd>
                <dt>Quantiy:</dt>
                <dd>{qty}</dd>
                <dt>Unit of Purchase:</dt>
                <dd>{uoi.toUpperCase()}</dd>
            </dl>
        </div>
    )

}

export default Food