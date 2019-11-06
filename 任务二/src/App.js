import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './containter/home/Home'
import Api from './containter/api/Api'
import About from './containter/about/About'
import Start from './containter/start/Start'
import Login from './containter/login/Login'
import Substance from './Router/Substance'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route exact path='/' component={Home}/>
                        <Route path='/substance/:id' component={Substance}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                    </div>
                    <div className='right'></div>
                </div>
            </Router>
        )
    }
}
