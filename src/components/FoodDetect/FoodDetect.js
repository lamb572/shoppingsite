import React from 'react';
import './FoodDetect.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FoodDetect =({ setUrl, onSubmit}) =>{
    
    return(
        <div>
        <Form className="container-lg mt-4">
            <Form.Group>
                <Form.Label>File Upload Field </Form.Label>
                <Form.Control type="text" placeholder="URL" onChange={(e) => setUrl(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>Submit </Button>
        </Form>

        
        </div>
    )
    
}

export default FoodDetect;