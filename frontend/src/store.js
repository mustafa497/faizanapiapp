import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { employeeListReducer, employeeCreateReducer, employeeDetailsReducer, employeeUpdateReducer, employeeDeleteReducer } from './reducers/employeeReducers'

const reducer = combineReducers({
    employeeList: employeeListReducer,
    employeeCreate: employeeCreateReducer,
    employeeDetails: employeeDetailsReducer,
    employeeUpdate: employeeUpdateReducer,
    employeeDelete: employeeDeleteReducer,
})

const initialState = {}


const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store