import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ChangePassword =({setRoute, handleSubmit, setValidated, email}) =>{

    const [changePassword, setChangePassword] =useState(false)
    const [password, setPassword] =useState('111111');
    const [confirmPassword, setConfirmPassword] =useState('111111');
    const [currentPassword, setCurrentPassword] =useState('')
    const [oldPassword, setOldPassword] = useState(true);

    if(setRoute ==='mainpage'){
        setChangePassword(false)
        setPassword('');
        setConfirmPassword('');
        setCurrentPassword('')
        setOldPassword(true);
    }


    

    const savePassword = (event) => {
        setOldPassword(true);
        if (handleSubmit(event)){   
            fetch('https://foodsite-api2.azurewebsites.net/updatepassword', {
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
                }else{
                    setValidated(true)
                }  
            })
    }};

    return(
        <div>
            {changePassword
                ?<Form.Group controlId="formChangePassword">
                    <Button className="m-1" onClick={() => {setChangePassword(false); setValidated('')}}>Hide Password</Button>
                    
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
                </Form.Group>
                :<Button className="m-2" onClick={() => {setChangePassword(true); setValidated('')}}>Change Password</Button>
                }
        </div>

    )
}

export default ChangePassword