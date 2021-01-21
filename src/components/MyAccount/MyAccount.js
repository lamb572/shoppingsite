import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const Register = ({ setRoute, user}) => {
    const [detailShow, setDetailShow] =useState(false)

    const [email, setEmail] =useState('');
    const [emailExists, setEmailExists] =useState(true);
    const [updateEmail, setUpdateEmail] = useState('');

    const [changePassword, setChangePassword] =useState(false)
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [currentPassword, setCurrentPassword] =useState('')
    const [oldPassword, setOldPassword] = useState(true);

    const [name, setName] =useState('');
    const [surname, setSurname] =useState('');

    const [address, setAddress] =useState('');
    const [address2, setAddress2] =useState('');
    const [town, setTown] =useState('');
    const [county, setCounty] =useState('');
    const [postCode, setPostCode] =useState('');

    const [showShipping, setShowShipping] = useState(false);
    const [showBilling, setShowBilling] = useState(false);
    const [changeInfo, setChangeInfo] = useState(false);

    const [validated, setValidated] = useState(false);

    if(setRoute ==='mainpage'){
        setDetailShow(false)
        setEmail('');
        setEmailExists(true);
        setUpdateEmail('');
        setChangePassword(false)
        setPassword('');
        setConfirmPassword('');
        setCurrentPassword('')
        setOldPassword(true);
        setName('');
        setSurname('');
        setAddress('');
        setAddress2('');
        setTown('');
        setCounty('');
        setPostCode('');
        setShowShipping(false);
        setShowBilling(false);
        setChangeInfo(false);
        setValidated(false);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            setValidated(true);
            return true;
           
        }};

    const saveDetails = (event) => {
        if (handleSubmit(event)){   
            fetch('http://localhost:3001/updateuserinfo', {
                method: 'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    updateEmail: updateEmail,
                    name: name,
                    surname: surname,
                })
            })
            .then(response => response.json())
            .then(user =>{
                if(user === 'email'){ 
                    setEmailExists(false)
                }  
            })
        }};

    const saveAddress = (event) => {
        if (handleSubmit(event)){   
            fetch('http://localhost:3001/updateaddress', {
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
        }};

    const saveShipAddress = () => {

    };

    const savePassword = (event) => {
        setOldPassword(true);
        if (handleSubmit(event)){   
            fetch('http://localhost:3001/updatepassword', {
                method: 'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:email,
                    password:password,
                    currentPassword:currentPassword,
                    confirmPassword:confirmPassword
                })
            })
            .then(response => response.json())
            .then(user =>{
                if(user === 'wrongcredentials'){ 
                    setOldPassword(false)
                }  
            })
        }};
    
    const showAndLoad = () =>{
        if (!detailShow){
            setDetailShow(true)
            setEmail(user.email)
            setUpdateEmail(user.email)
            setPassword(111111)
            setConfirmPassword(111111)
            setName(user.name)
            setSurname(user.surname)
            setAddress(user.address)
            setAddress2(user.address2)
            setTown(user.town)
            setCounty(user.county)
            setPostCode(user.postcode)
        }else{
            setDetailShow(false)
        } 
    }
        
    return(
        <div className="myaccount">
            <Form className="myaccount-form" noValidate validated={validated} onSubmit={handleSubmit}> 
            <Button onClick={showAndLoad}>Show Details:</Button>
          {detailShow
            ?<div>
                {changeInfo
                    ?<div>
                    <Button onClick={() => setChangeInfo(false)}>Hide Users Info</Button>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    { !emailExists
                        ?<Form.Text className="error" > Email Already Exists</Form.Text> 
                        :null
                        }
                    <Form.Control required value={updateEmail} onChange={(input) => setUpdateEmail(input.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required value={name} onChange={(input) => setName(input.target.value)} type="text" placeholder="First Name" />
                    </Form.Group>


                    <Form.Group controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control required value={surname} onChange={(input) => setSurname(input.target.value)} type="text" placeholder="Surname" />
                    </Form.Group>
                    <Button onClick={saveDetails} variant="primary">
                            Save Details
                    </Button>
                </div> 
                :<div><Button onClick={() => setChangeInfo(true)}>Change User Info</Button>
                    <h4> Email: {email}</h4>
                    <h4> First Name: {name}</h4>
                    <h4> Surname: {surname}</h4>  
                </div>
                } 

                {showBilling 
                    ?<Form.Group controlId="formBillingAddress">
                    <Button onClick={() => setShowBilling(false)}>Hide Billing Address</Button>
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
                        <Button onClick={saveAddress} variant="primary">
                            Save Billing Address
                        </Button>
                    </Form.Group>
                    :<div>
                        <Button onClick={() => setShowBilling(true)}>Changing Billing Address</Button>
                        <h3> Billing Address</h3>
                        <h4>{address}</h4>
                        <h4>{address2}</h4>
                        <h4> Town: {town}</h4>
                        <h4>County: {county}</h4>
                        <h4>Postcode: {postCode}</h4>
                    </div>
                }

                {showShipping 
                        ?<Form.Group controlId="formShippingAddress">
                            <Button onClick={() => setShowShipping(false)}>Hide Shipping Address</Button>
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
                        <Button onClick={saveShipAddress} variant="primary">
                            Save Shipping Address
                        </Button>
                        </Form.Group>
                        : <div>
                            <Button onClick={() => setShowShipping(true)}>Change Shipping Address</Button>
                            <h3> Shipping Address</h3>
                            <h4>{address}</h4>
                            <h4>{address2}</h4>
                            <h4> Town: {town}</h4>
                            <h4>County: {county}</h4>
                            <h4>Postcode: {postCode}</h4>
                        </div>
                }

                {changePassword
                ?<div>
                    <Button onClick={() => setChangePassword(false)}>Hide Password</Button>
                    
                    <Form.Group controlId="formGridOldPassword">
                    <Form.Label>Current Password</Form.Label>
                    { !oldPassword
                        ?<Form.Text className="error" > Passwords do not match</Form.Text> 
                        :null
                        }
                    <Form.Control required value={currentPassword} onChange={(input) => setCurrentPassword(input.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formGridNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control required value={password} onChange={(input) => setPassword(input.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formGridConfirmPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                        { password !== confirmPassword
                        ?<Form.Text className="error" > Passwords do not match</Form.Text> 
                        :null
                        }
                    <Form.Control required value={confirmPassword} onChange={(input) => setConfirmPassword(input.target.value)} type="password" placeholder="Password" />
                    <Button onClick={savePassword} variant="primary">
                        Save Password
                    </Button>
                    </Form.Group>
                </div>
                :<Button onClick={() => setChangePassword(true)}>Change Password</Button>
                }   
            
            </div>
                :null
            } 
                
                </Form>
            </div>
    );
}
export default Register