import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ChangeInfo from './ChangeInfo';
import Billing from './Billing';
import Shipping from './Shipping'
import ChangePassword from './ChangePassword';


const Register = ({ setRoute, user}) => {
    const [detailShow, setDetailShow] =useState(false)
    const [email, setEmail] =useState(user.email);
    const [validated, setValidated] = useState(false);

    if(setRoute ==='mainpage'){
        setDetailShow(false)
        setEmail('');
        setValidated(false);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        setValidated(false)
        }else{
            setValidated(true);
            return true;   
        }
    };

 
    
    return(
        <div className="myaccount">
            <Form className="myaccount-form" 
            noValidate 
            validated={validated} 
            > 
                
            {detailShow
                ?<div>
                    <Button onClick={()=> setDetailShow(false)}>Show Details:</Button>
            
                    <ChangeInfo setRoute={setRoute} user={user} handleSubmit={handleSubmit} setValidated={setValidated} email={email} />

                    <Billing setRoute={setRoute} user={user} handleSubmit={handleSubmit}  setValidated={setValidated} email={email}/>
                    
                    <Shipping setRoute={setRoute} user={user} handleSubmit={handleSubmit}  setValidated={setValidated} email={email} />
                    
                    <ChangePassword setRoute={setRoute} handleSubmit={handleSubmit} setValidated={setValidated} email={email} />

                </div>
                :<Button onClick={()=> setDetailShow(true)}>Show Details:</Button>
                } 
                
            </Form>
        </div>
    );
}
export default Register