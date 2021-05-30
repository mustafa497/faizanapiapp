import React from 'react'; 
import { HashRouter as Router, Route } from 'react-router-dom'


import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

import EmployeeListScreen from './screens/EmployeeListScreen'
import EmployeeScreen from './screens/EmployeeScreen'
import EmployeeEditScreen from './screens/EmployeeEditScreen'


function App(){
    return(
    <Router>
      
      <main className="py-3">
        <Container>
          

          <Route path='/employeelist' component={EmployeeListScreen} />
          <Route path='/employee/:id' component={EmployeeScreen} />
          <Route path='/employee/:id/edit' component={EmployeeEditScreen} />

        </Container>
      </main>
      
    </Router>
    )
}

export default App;
