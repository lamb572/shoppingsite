import React from 'react';
import Deal from '../Deal/Deal';
import FoodCards from '../FoodCards/FoodCards';



const MainBody =({filterFoodList, foodDeal }) => {
    
    return(
        <div className="main-body">
            { foodDeal 
            ?<Deal/>
            :<FoodCards filterFoodList={filterFoodList}/>
            } 
        </div>
    )
}

export default MainBody