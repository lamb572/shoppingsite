import React from 'react';
import Food from '../Food/Food';


const DetectedList =({filteredItems}) =>{

    return(
        <div className="food-card" >
            {
            filteredItems.map((user, i) => {
              return (
                <Food
                  keys={i}
                  food={filteredItems[i].food}
                  price={filteredItems[i].price}
                  qty={filteredItems[i].qty}
                  uoi={filteredItems[i].uoi}
                  image={filteredItems[i].image}
                  />
              );
            })
          }
        </div>
        
    )

}

export default DetectedList