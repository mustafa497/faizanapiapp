import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ employee }) {
    return (
        <Card className="my-3 p-3 rounded">

            <Card.Body>
                    <Card.Title as="div">
                        <strong>{employee.number}</strong>
                    </Card.Title>



                <Card.Text as="h3">
                    <strong>{employee.true}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
