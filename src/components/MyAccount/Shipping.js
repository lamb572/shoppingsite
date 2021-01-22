import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Shipping =({setRoute, user, handleSubmit, setValidated, email}) =>{

    const [showShipping, setShowShipping] = useState(false);;
    const [address, setAddress] =useState(user.address);
    const [address2, setAddress2] =useState(user.address2);
    const [town, setTown] =useState(user.town);
    const [county, setCounty] =useState(user.county);
    const [postCode, setPostCode] =useState(user.postCode);

    if(setRoute ==='mainpage'){
        setShowShipping(false);
        setAddress('');
        setAddress2('');
        setTown('');
        setCounty('');
        setPostCode('');
        
    }
   
    

    const saveShipAddress = () => {

    };

    return(
        <div>
            {showShipping 
                ?<Form.Group controlId="formUpdateShippingAddress">
                    <Button className="m-1" onClick={() => {setShowShipping(false); setValidated('')}}>Hide Shipping Address</Button>
                    <br/>
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Group controlId="formGridSAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text"  placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridSAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control type="text" placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSGridState">
                        <Form.Label>County</Form.Label>
                        <Form.Control  as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSGridZip">
                        <Form.Label>Post Code</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                <Button className="m-1" onClick={saveShipAddress} variant="primary">
                    Save Shipping Address
                </Button>
                </Form.Group>
                : <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th> Shipping Address</th>
                        </tr>
                    </thead>
                    <tbody>    
                        <tr>
                            <td>
                                {address} <br/>
                                {address2}<br/>
                                {town}<br/>
                                {county}<br/>
                                {postCode}<br/>
                                <Button className="m-2" onClick={() =>{ setShowShipping(true); setValidated('')}}>Change Shipping Address</Button>
                            </td>
                        </tr> 
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Shipping