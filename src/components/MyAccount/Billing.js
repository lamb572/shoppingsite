import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Billing =({setRoute, user, handleSubmit, setValidated, email}) =>{
    
    const [showBilling, setShowBilling] = useState(false);
    const [address, setAddress] =useState(user.address);
    const [address2, setAddress2] =useState(user.address2);
    const [town, setTown] =useState(user.town);
    const [county, setCounty] =useState(user.county);
    const [postCode, setPostCode] =useState(user.postcode);

    if(setRoute ==='mainpage'){
        setShowBilling(false);
        setAddress('');
        setAddress2('');
        setTown('');
        setCounty('');
        setPostCode('');
        
    }


    const saveAddress = (event) => {
        if (handleSubmit(event)){   
            fetch('https://foodsite-api2.azurewebsites.net/updateaddress', {
                method: 'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    address:address,
                    address2:address2,
                    town:town,
                    county:county, 
                    postcode:postCode
                    
                })
            })
            .then(response => response.json())
            .then(res => {
                if (res === 'itemsupdated'){
                    setValidated(true)
                }
            })
        }};

    return(
        <div>
            {showBilling 
                    ?<Form.Group controlId="formUpdateBillingAddress">
                    <Button className="m-1" onClick={() => {setShowBilling(false); setValidated('')}}>Hide Billing Address</Button>
                    <br/>
                    <Form.Label >Billing Address</Form.Label>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control value={address} onChange={(input) => setAddress(input.target.value)} type="text" required placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control value={address2} onChange={(input) => setAddress2(input.target.value)} type="text" placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Town/City</Form.Label>
                            <Form.Control value={town} onChange={(input) => setTown(input.target.value)} type="text" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>County</Form.Label>
                            <Form.Control onChange={(input) => setCounty(input.target.value)} as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Post Code</Form.Label>
                            <Form.Control value={postCode} onChange={(input) => setPostCode(input.target.value)} type="text" required />
                            </Form.Group>
                        </Form.Row>
                        <Button className="m-1" onClick={saveAddress} variant="primary">
                            Save Billing Address
                        </Button>
                    </Form.Group>
                    :<Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th> Billing Address</th>
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
                                    <Button className="m-2" onClick={() => {setShowBilling(true); ; setValidated('')}}>Changing Billing Address</Button>
                                </td>
                            </tr> 
                        </tbody>
                    </Table>
                }

        </div>
    )

}

export default Billing