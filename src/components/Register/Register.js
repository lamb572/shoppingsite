import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const Register = ({setSignIn, setRoute, loadUser}) => {
    const [email, setEmail] =useState('');
    const [emailExists, setEmailExists] =useState(true)

    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');

    const [name, setName] =useState('');
    const [surname, setSurname] =useState('');

    const [address, setAddress] =useState('');
    const [address2, setAddress2] =useState('');
    const [town, setTown] =useState('');
    const [county, setCounty] =useState('');
    const [postCode, setPostCode] =useState('');

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            setValidated(true);
            fetch('https://foodsite-api2.azurewebsites.net/register', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                surname: surname,
                confirmPassword: confirmPassword,
                address:address,
                address2:address2,
                town:town,
                county:county, 
                postcode:postCode
            })
        })
        .then(response => response.json())
        .then(user =>{
            if (user.email ){
                loadUser(user)
                setSignIn(true)
                setRoute('mainpage')
            }else if(user === 'email'){ 
                setEmailExists(false)

            }else{
                console.log(user)
            }   
        })
        }

        


    };


    const [showShipping, setShowShipping] = useState(false)

    const checkBoxClick =(event) =>{
        const boxChecked = event.target.checked
        boxChecked ? setShowShipping(true) : setShowShipping(false)
    }
    
        
    return(
           <Form noValidate validated={validated} onSubmit={handleSubmit} action="" className="Register">    
                <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                { !emailExists
                    ?<Form.Text className="error" > Email Already Exists</Form.Text> 
                    :null
                    }
                <Form.Control required value={email} onChange={(input) => setEmail(input.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required value={password} onChange={(input) => setPassword(input.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                    { password !== confirmPassword
                    ?<Form.Text className="error" > Passwords do not match</Form.Text> 
                    :null
                    }
                <Form.Control required value={confirmPassword} onChange={(input) => setConfirmPassword(input.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required value={name} onChange={(input) => setName(input.target.value)} type="text" placeholder="First Name" />
                </Form.Group>


                <Form.Group controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control required value={surname} onChange={(input) => setSurname(input.target.value)} type="text" placeholder="Surname" />
                </Form.Group>
                
                <Form.Group controlId="formBillingAddress">
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
                </Form.Group>
            
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Different Shipping Address" onClick={checkBoxClick} />
                </Form.Group>

                {showShipping 
                    ?<Form.Group controlId="formShippingAddress">
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
                    </Form.Group>
                    : null
                }
                <Button onClick={handleSubmit} variant="primary">
                    Submit
                </Button>
            </Form>
    );
}
export default Register