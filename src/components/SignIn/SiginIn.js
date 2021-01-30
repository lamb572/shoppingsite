import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Signin = ({loadUser, setSignIn, setRoute}) => {

    const [signInEmail, setSignInEmail] =useState('');

    const [signInPassword, setSignInPassword] =useState('');

    const [wrongCreds, setWrongCreds] =useState(false)

    const onSubmitSignIn= () => {
        fetch('https://foodsite-api2.azurewebsites.net/signin', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response => response.json())
        .then(user =>{
            console.log(user)
            if (user.email){
                loadUser(user)
                setSignIn(true)
                setRoute('myaccount')
            }else{
                setWrongCreds(true)
            }

        })
    }

        
    return(
           <Form className="Signin">
               { wrongCreds
                    ?<Form.Text className="error" > Email or Password is incorrect</Form.Text> 
                    :null
                    }    
                <Form.Group onChange={(input)=> setSignInEmail(input.target.value)} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group onChange={(input)=> setSignInPassword(input.target.value)} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" onClick={onSubmitSignIn}>
                    Submit
                </Button>
            </Form>
    );
}
export default Signin 