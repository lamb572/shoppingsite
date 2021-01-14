import React, { useState } from 'react';
import Navigation from "./components/Nav/Nav";
import MainBody from './components/MainBody/MainBody'
import foodList from './foodList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SiginIn';
import FaceDetect from './components/FoodDetect/FoodDetect'



function App() {
  const [route, setRoute] = useState('mainpage');
  const [searchfield, setSearchfield] = useState([null]);
  const [searchfieldValue, setSearchfieldValue] = useState('');
  const [foodDeal, setFoodDeal]= useState(true);
  const [signIn, setSignIn]= useState(false);

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
      <Navigation 
        onSearch={onSearchChange} 
        searchFieldchange={searchFieldchange} 
        searchfieldValue={searchfieldValue} 
        onClickType={onClickType} 
        signIn={signIn} 
        setRoute={setRoute}
        setSignIn={setSignIn}
        setFoodDeal={setFoodDeal} 
        className="position-sticky "
      />
      { route === 'mainpage'
        ?<MainBody  filterFoodList={filterFoodList} foodDeal={foodDeal} />
        : route === 'register' ?<Register />
        : route === 'signin' ?<SignIn />
        : route === 'facedetect' ?<FaceDetect/>
        : null
      }
      
    </div> 
  );

};

export default App;
