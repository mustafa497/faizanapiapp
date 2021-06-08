import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { employeeListReducer, employeeCreateReducer, employeeDetailsReducer, employeeUpdateReducer, employeeDeleteReducer } from './reducers/employeeReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    
} from './reducers/userReducers'

const reducer = combineReducers({
    employeeList: employeeListReducer,
    employeeCreate: employeeCreateReducer,
    employeeDetails: employeeDetailsReducer,
    employeeUpdate: employeeUpdateReducer,
    employeeDelete: employeeDeleteReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store