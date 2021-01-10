import React from 'react';
import image from '../images/fakedeal.png' ;


const Deal =() => {
    return(
        <div className="deal">
            <img className= "dealimg" alt='deal' src={image}/>
        </div>
    )
}

export default Deal