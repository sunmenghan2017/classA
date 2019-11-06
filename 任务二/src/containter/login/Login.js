import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Home from '../home/Home';
function login(props){
    props.history.push('/');
}
export default class Login extends Component {
    render() {
        return (
            <div style={{float:'left',width:100,padding:10,lineHeight:2}} >
                <label>用户名</label> <input type='text'/>
                <label>密码</label><input type='password'/>
                <Link to='/home'>登录</Link>
                <Route path={'/home'} component={Home} />
                {/* <button onClick={login}>登录</button> */}
            </div>
        )
    }
}


