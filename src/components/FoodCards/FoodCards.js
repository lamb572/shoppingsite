import React from 'react';
import Food from '../Food/Food';


const FoodCards =({filterFoodList}) =>{

    return(
        <div className="food-card" >
            {
            filterFoodList.map((user, i) => {
              return (
                <Food
                  keys={i}
                  food={filterFoodList[i].food}
                  price={filterFoodList[i].price}
                  qty={filterFoodList[i].qty}
                  uoi={filterFoodList[i].uoi}
                  image={filterFoodList[i].image}
                  />
              );
            })
          }
        </div>
        
    )

}

export default FoodCards