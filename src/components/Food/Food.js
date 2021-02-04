import React from 'react';
import addBasket from '../../images/add-to-basket.png';
import './Food.css';
const Food =({food, price, qty, uoi, image, keys, basketClick}) =>{


    return(
        <div className="food" key={keys.toString()}>
            <img className="item-img" alt={food} src={image}/>
            
            <dl>
                <dt >Food:</dt>
                <dd>{food}</dd> 
                <dt>Price</dt>
                <dd>£{price}</dd>
                <dt>Quantiy:</dt>
                <dd>{qty}</dd>
                <dt>Unit of Purchase:</dt>
                <dd>{uoi.toUpperCase()}</dd>
                
            </dl>
            <div className="food-img">
                <img
                onClick={() => basketClick({food, price})} 
                src={addBasket} 
                alt="addtobasket" 
                style={{height:"1.5em", width:"auto" }}
                ></img>
            </div>
        </div>
    )

}

export default Food