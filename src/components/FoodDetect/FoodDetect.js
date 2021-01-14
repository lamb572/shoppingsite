import React from 'react';
import './FoodDetect.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const FoodDetect =({ setUrl, onSubmit, url}) =>{

    
    return(
        <div className="d-flex justify-content-center">
        <Form className="container-lg m-2 mt-4 shadow p-3 bg-white rounded">
            <Form.Group>
                <Form.Label>URL Field </Form.Label>
                <Form.Control type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                {url
                ? <Image src={url} rounded fluid className="w-50 shadow p-3 m-2 bg-white rounded" />
                : null}
                
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>Submit </Button>
        </Form>

        
        </div>
    )
    
}

export default FoodDetect;