import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';




const ChangeInfo = ({setRoute, handleSubmit, user, email, setValidated}) => {
    const [changeInfo, setChangeInfo] = useState(false);
    const [emailExists, setEmailExists] =useState(true);
    const [updateEmail, setUpdateEmail] = useState(user.email);
    const [name, setName] =useState(user.name);
    const [surname, setSurname] =useState(user.surname); 


    if(setRoute ==='mainpage'){
        setEmailExists(true);
        setChangeInfo(false);
        setUpdateEmail('');
        setName('');
        setSurname(''); 
    }

    
    const saveDetails = (event) => {
        
        if (handleSubmit(event)){  
            fetch('https://foodsite-api2.azurewebsites.net/updateuserinfo', {
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
                    }else{
                        setValidated(true)
                    }  
                })
        }} 
    return(
        <div>
        {changeInfo
            ?<Form.Group controlId="formChangeInfo">
            <Button className="m-1" onClick={() => {setChangeInfo(false); setValidated('')}}>Hide Users Info</Button>
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
            <Button className="m-1" onClick={saveDetails} variant="primary">
                    Save Details
            </Button>
        </Form.Group>
        :<Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Account Information</th>
                </tr>
            </thead>
            <tbody>    
                <tr>
                    <td>Email: {email}<br/>
                    First Name: {name}<br/>
                    Surname: {surname}<br/>
                    <Button className="mt-2" onClick={() => {setChangeInfo(true) ; setValidated('')}}>Change User Info</Button>
                    </td>
                </tr> 
            </tbody>
        </Table>
        } 
        </div>
    )
}
export default ChangeInfo