import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import basket from '../../images/shopping-basket.png';


const Navigation =({searchfieldValue, searchFieldchange, onSearch, onClickType ,signIn, setRoute, setSignIn, setFoodDeal}) => {
    

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light"  >
        <Navbar.Brand onClick={() =>{
          setRoute('mainpage');
          setFoodDeal(true);
          }}>
            Food Shopping
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="" className=" justify-content-between">
          <Nav >
          <Nav.Link onClick={() => {
            setRoute('mainpage');
            setFoodDeal(true);
            }}>
            Home
          </Nav.Link>
            <NavDropdown title="Groceries" id="" >
              <NavDropdown.Item ></NavDropdown.Item>
                <NavDropdown title="Fresh Food" id="1">
                    <NavDropdown.Item  onClick={() => onClickType('fresh fruit')} >Fresh Fruit</NavDropdown.Item>
                    <NavDropdown.Item  onClick={() => onClickType('fresh veg')}>Fresh Veg</NavDropdown.Item>
                    <NavDropdown.Item  onClick={() => onClickType('milk')}>Milk</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Bakery" id="2">
                    <NavDropdown.Item onClick={() => onClickType('bread')}>Bread & Rolls</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('wraps')}>Wraps</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('pancakes')}>Pancakes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Food Type" id="3">
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Food Type" id="4">
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => onClickType('')}>Sub-Type</NavDropdown.Item>
                </NavDropdown>
              
            </NavDropdown>
            <Nav.Link onClick={() => setRoute('facedetect')}>Food API</Nav.Link>
          </Nav>
          <Form inline >
            <FormControl type="text" placeholder="Search" value={searchfieldValue} onChange={searchFieldchange} />
            <Button variant="outline-success" onClick={onSearch}>Search</Button>
          </Form>

          {signIn
            ?<Nav>
                <Nav.Link onClick={() => setRoute('basket')}>
                  <img id="bskt" src={basket} alt="basket" style={{height:"1.5em", width:"auto" }}></img>
                </Nav.Link>
                <Nav.Link >My Account</Nav.Link>
                <Nav.Link  onClick={() => setRoute('signin')}>Sign In</Nav.Link>
                <Nav.Link  onClick={() => setRoute('register')}>Register</Nav.Link>
              </Nav>
            :<Nav>
                <Nav.Link onClick={() => setRoute('basket')}>
                  <img id="bskt" src={basket} alt="basket" style={{height:"1.5em", width:"auto" }}></img>
                </Nav.Link>
                <Nav.Link >My Account</Nav.Link>
                <Nav.Link  onClick={() => setSignIn(true) }>Sign Out</Nav.Link>
            </Nav>
            }
        </Navbar.Collapse>
      </Navbar>
     
    );
    
}

export default Navigation