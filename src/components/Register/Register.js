import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const Register = () => {
    const [showShipping, setShowShipping] = useState(false)

    const checkBoxClick =(event) =>{
        const boxChecked = event.target.checked
        boxChecked ? setShowShipping(true) : setShowShipping(false)
    }
    
        
    return(
           <Form className="Register">    
                <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formBillingAddress">
                <Form.Label>Billing Address</Form.Label>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>County</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Post Code</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
            
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Different Shipping Address" onClick={checkBoxClick} />
                </Form.Group>

                {showShipping 
                    ?<Form.Group controlId="formShippingAddress">
                        <Form.Label>Shipping Address</Form.Label>
                        <Form.Group controlId="formGridSAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridSAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Town/City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formSGridState">
                            <Form.Label>County</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formSGridZip">
                            <Form.Label>Post Code</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    : null
                }
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
}
export default Register