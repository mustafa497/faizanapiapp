import axios from 'axios'
import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,

    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,

    EMPLOYEE_CREATE_REQUEST,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_CREATE_FAIL,

    EMPLOYEE_DELETE_REQUEST,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_DELETE_FAIL,

    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
    

} from '../constants/employeeConstants'


export const listEmployees = () => async (dispatch) => {
    try {
        dispatch({ type: EMPLOYEE_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/employees/')
        // const { data } = await axios.get(`/api/employees${keyword}`)

        dispatch({
            type: EMPLOYEE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EMPLOYEE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listEmployeeDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: EMPLOYEE_DETAILS_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/employee/${id}`)
        // const { data } = await axios.get(`/api/employees${keyword}`)

        dispatch({
            type: EMPLOYEE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EMPLOYEE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createEmployee = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPLOYEE_CREATE_REQUEST
        })


        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/employee/create/`,
            {},
            config
        )
        dispatch({
            type: EMPLOYEE_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: EMPLOYEE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteEmployee = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPLOYEE_DELETE_REQUEST
        })


        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/employee/delete/${id}/`,
            config
        )

        dispatch({
            type: EMPLOYEE_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EMPLOYEE_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const updateEmployee = ( employee ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPLOYEE_UPDATE_REQUEST
        })


        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/employee/update/${employee.id}/`,
            employee,
            config
        )
        dispatch({
            type: EMPLOYEE_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: EMPLOYEE_DETAILS_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: EMPLOYEE_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

