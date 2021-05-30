import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { updateEmployee } from '../actions/employeeActions'
import { EMPLOYEE_UPDATE_RESET } from '../constants/employeeConstants'


function EmployeeEditScreen({ match, history }) {

    const employeeId = match.params.id

    const [number, setNumber] = useState('')
    const [optin, setOptin] = useState(false)
    const [userid, setUserid] = useState('')
    

    const dispatch = useDispatch()

    const employeeDetails = useSelector(state => state.employeeDetails)
    const { employee } = employeeDetails

    const employeeUpdate = useSelector(state => state.employeeUpdate)
    const {success: successUpdate } = employeeUpdate


    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: EMPLOYEE_UPDATE_RESET })
            history.push('/employeelist')
        } else {            
            setNumber(employee.number)
            setOptin(employee.optin)
            setUserid(employee.userid)
        }



    }, [dispatch, employee, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
         
        dispatch(updateEmployee({
            id: employeeId,
            number,
            optin,
            userid,   
        }))
    }

    

    return (
        <div>
            <Link to='/employeelist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Employee</h1>                 
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='number'>
                                <Form.Label>Number</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter number'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='optin'>
                                <Form.Check
                                    type='checkbox'
                                    label='Optin'
                                    checked={optin}
                                    onChange={(e) => setOptin(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>


                            <Form.Group controlId='userid'>
                                <Form.Label>Userid</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter userid'
                                    value={userid}
                                    onChange={(e) => setUserid(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

                        </Form>
                    

            </FormContainer >
        </div>

    )
}

export default EmployeeEditScreen