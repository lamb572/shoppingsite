import React, { useState } from 'react';
import Navigation from "./components/Nav/Nav";
import MainBody from './components/MainBody/MainBody'
import foodList from './foodList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [searchfield, setSearchfield] = useState([null]);
  const [searchfieldValue, setSearchfieldValue] = useState('');
  const [foodDeal, setFoodDeal]= useState(true);

  const setMainPage = (i) =>{
    if(i === ""){
      setFoodDeal(true)
    }else{
      setFoodDeal(false)
    } 
  };

  const filterFoodList = foodList.filter(food =>{ 
     let search = (e) => food.tag.toLowerCase().includes(e); 
     return searchfield.some(search);
  });

  const onSearchChange = (event) => {
    let food = Object.values(event.target.previousSibling.value.toLowerCase().split(" "));
    setSearchfield(food);
    setMainPage(event.target.previousSibling.value)
  };

  const searchFieldchange = (event) => {
    setSearchfieldValue(event.target.value)
  };

  function onClickType(type) {
    setSearchfield([type]);
    setMainPage(type);
  };
    


  return (
    <div >
      <Navigation onSearch={onSearchChange} searchFieldchange={searchFieldchange} searchfieldValue={searchfieldValue} onClickType={onClickType} className="position-sticky "/>
      <MainBody  filterFoodList={filterFoodList} foodDeal={foodDeal} />
    </div> 
  );

};

export default App;
