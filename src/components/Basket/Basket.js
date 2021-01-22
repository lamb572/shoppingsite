import React from 'react'
import Table from 'react-bootstrap/Table'

const Basket = ({basketList}) =>{
    
    

    return(
        <div>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {basketList.map(prod =>{
                        return (
                            <tr key={prod.food}> 
                                <td>{prod.food}</td>
                                <td>{prod.price}</td>
                                <td>{prod.qty}</td>
                                <td>{prod.totalprice}</td>
                            </tr>

                        )
                        })}
                </tbody>
            </Table>
        </div>
    )   
}

export default Basket