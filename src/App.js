
import React, { Component } from 'react'
import {BrowserRouter as Router,withRouter,Route,Switch,Redirect,Link} from 'react-router-dom'//改成HashRouter
import './App.css';
import Todolist from './Todolist/Todolist'

export default class App extends Component {  
  
  render() {
    return (
      <Router basename="/build">
        <div>
          <Route path='/todolist' component={Todolist}/>
        </div>
      </Router>
    )
  }
}
