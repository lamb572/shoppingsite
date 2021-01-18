import React, { useState } from 'react';
import Navigation from "./components/Nav/Nav";
import foodList from './foodList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SiginIn';
import FaceDetect from './components/FoodDetect/FoodDetect'
import Deal from './components/Deal/Deal';
import FoodCards from './components/FoodCards/FoodCards';
import DetectedList from './components/DetectedList/DetectedList';
import Footer from './components/Footer/Footer';
import Basket from './components/Basket/Basket';



function App() {
  const [route, setRoute] = useState('mainpage');
  const [searchfield, setSearchfield] = useState([null]);
  const [searchfieldValue, setSearchfieldValue] = useState('');
  const [foodDeal, setFoodDeal]= useState(true);
  const [signIn, setSignIn]= useState(false);
  const [itemsDetected, setItemsDetected] = useState([null]);
  const [url, setUrl] =useState();
  const [basketList, setBasketList] = useState([]);





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

  const onClickType = (type) => {
    setSearchfield([type]);
    setMainPage(type);
  };

  const onSubmit = () => {
    setItemsDetected([null])  
    fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            input: url
        })
    })
    .then(response => response.json())
    .then( response => setItemsDetected(response.filter(i => i.value > 0.9).map(i => i.name)))
    .catch(err => console.log(err));  

  }

  const filteredItems = foodList.filter(food =>{ 
    let search = (e) => food.food.toLowerCase().includes(e); 
    return itemsDetected.some(search);
  });


  const basketClick = ({food, price}) =>{ 
    if (basketList.some(prod => prod.food === food)){
      setBasketList(
        basketList.map(item => {
          let newItem = {'food':food, 'price':price, 'qty':item.qty +1, 'totalprice':item.price + price}
          if(item.food === food){
            return newItem
          }else{
            return item
          }
        })
      )
      }else{
        setBasketList([...basketList, {'food':food, 'price':price, 'qty':1, 'totalprice':price}])
    }
  };
  console.log(basketList)

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
        ? foodDeal 
          ?<Deal/>
          :<FoodCards 
            filterFoodList={filterFoodList}
            basketClick={basketClick}
            />
        : route === 'register' ?<Register />
        : route === 'signin' ?<SignIn />
        : route === 'facedetect' 
          ? filteredItems.length < 1 
            ? <FaceDetect setUrl={setUrl} onSubmit={onSubmit}/> 
            : <div>
                <FaceDetect url={url} setUrl={setUrl} onSubmit={onSubmit}/> 
                <DetectedList filteredItems={filteredItems} basketClick={basketClick}/>
              </div>
        : route === 'basket' ?<Basket basketList={basketList} />
        :null
      }
      <Footer />
    </div> 
  );

};

export default App;



// TODO!!
// build sql table(foodsite) for registration and passwords
// my account
//build up backend to allow and verify signin 
// animate the shopping basket when item added
// adjust qty or remove items from basket
// 
