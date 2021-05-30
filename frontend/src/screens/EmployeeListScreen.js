import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listEmployees, createEmployee, deleteEmployee } from '../actions/employeeActions'
import { EMPLOYEE_CREATE_RESET } from '../constants/employeeConstants'

function EmployeeListScreen({ history, match }) {

    const dispatch = useDispatch()

    const employeeList = useSelector(state => state.employeeList)
    const { employees } = employeeList

    const employeeCreate = useSelector(state => state.employeeCreate)
    const { success: successCreate, employee: createdEmployee } = employeeCreate

    const employeeDelete = useSelector(state => state.employeeDelete)
    const { success: successDelete } = employeeDelete
  
    let keywocrd = history.location.search

    
    useEffect(() => {
        dispatch({ type: EMPLOYEE_CREATE_RESET })

        if (successCreate) {
            history.push(`/employee/${createdEmployee.id}/edit`)
        } else {
            dispatch(listEmployees(keyword))
        }
    }, [dispatch, history, successCreate, createdEmployee, successDelete])


    const createEmployeeHandler = () => {
        dispatch(createEmployee())
    }


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteEmployee(id))
        }
    }
    
    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Employees</h1>
                </Col>

                <Col className='text-right'>
                    <Button className='my-3' onClick={createEmployeeHandler}>
                        <i className='fas fa-plus'></i> Create Employee
                    </Button>
                </Col>
            </Row>

            

            
            <div>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th> 
                            <th>NUMBER</th> 
                            <th>OPTIN</th>  
                            <th>USERID</th>                     
                        </tr>
                    </thead>

                    
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}> 
                                <td>{employee.id}</td>                          
                                <td>{employee.number}</td>
                                <td>{employee.optin ? (
                                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                                ) : (
                                    <i className='fas fa-check' style={{ color: 'red' }}></i>
                                )}</td>

                                <td>{employee.userid}</td>
                                <td>
                                    <LinkContainer to={`/employee/${employee.id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>

                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(employee.id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            </div>
                    
        </div>
    )

}

export default EmployeeListScreen