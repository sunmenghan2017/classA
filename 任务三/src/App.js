import React, { Component } from 'react'
import AppTab from './container/AppTab'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Switch } from 'antd-mobile';
import AppMy from './container/AppMy';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                {/* <Link to='/'></Link> */}
                {/* <Link to='/home'></Link> */}
                    <Route exact path='/' component={AppTab}/>
                    {/* <Route path='/login' component={AppLogin}/> */}
                    
                    {/* <Route path='/wode' component={AppMy}/> */}
                    {/* <Route path={'/shezhi'} component={AppSitting} /> */}
                </div>
            </Router>
        )
    }
}
