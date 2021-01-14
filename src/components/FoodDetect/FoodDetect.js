import React, { useState } from 'react';
import './FoodDetect.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FoodDetect =() =>{
   

    const onSubmit = () => {
        
        
        fetch('http://localhost:3001/imageurl', {
                method: 'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                  input: "https://www.regencyhampers.com/images/viewfinder/AYR-FS-292%20%20(2018)f.jpg"
                })
              })
          .then(response => response.json())
          .then( response => console.log(response))
          .catch(err => console.log(err));
      }
    return(
        <div>
        <Form className="container-lg mt-4">
            <Form.Group>
                <Form.Label>File Upload Field </Form.Label>
                <Form.Control type="text" placeholder="URL" />
                <Form.File  label="or" />
                <br/>
                
            </Form.Group>
        </Form>

        <Button variant="primary" onClick={onSubmit} type="submit">Submit </Button>
        </div>
    )
    
}

export default FoodDetect;