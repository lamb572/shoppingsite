import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'


const Navigation =({searchfieldValue, searchFieldchange, onSearch, onClickType}) => {
    

    return (
        <Navbar sticky="top" bg="light"  >
        <Navbar.Collapse id="" className=" justify-content-between">
          <Nav >
            <NavDropdown title="Groceries" id="" >
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown title="Fresh Food" id="1">
                    <NavDropdown.Item href="#action/3.1" onClick={(e) => onClickType('fresh fruit')}>Fresh Fruit</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" onClick={(e) => onClickType('fresh veg')}>Fresh Veg</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={(e) => onClickType('milk')}>Milk</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Bakery" id="2">
                    <NavDropdown.Item href="#action/3.1" onClick={(e) => onClickType('bread')}>Bread & Rolls</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" onClick={(e) => onClickType('wraps')}>Wraps</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={(e) => onClickType('pancakes')}>Pancakes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Food Type" id="3">
                    <NavDropdown.Item href="#action/3.1" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Food Type" id="4">
                    <NavDropdown.Item href="#action/3.1" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={(e) => onClickType('')}>Sub-Type</NavDropdown.Item>
                </NavDropdown>
              
            </NavDropdown>
            <Nav.Link href="#home">Food API</Nav.Link>
          </Nav>
          <Form inline >
            <FormControl type="text" placeholder="Search" value={searchfieldValue} onChange={searchFieldchange} />
            <Button variant="outline-success" onClick={onSearch}>Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#home">My Account</Nav.Link>
            <Nav.Link href="#link">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    );
    
}

export default Navigation