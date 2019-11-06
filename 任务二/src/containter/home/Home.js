import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import All from './components/All'
import Share from './components/Share'
import Jinghua from './components/Jinghua'
import './Home.css'
import Wenda from './components/Wenda'
import Zhaopin from './components/Zhaopin'
import Ceshi from './components/Ceshi'
import Content from '../../Router/Content'
export default class Home extends Component {
    render() {
        let {url}=this.props.match
        // console.log(this.props.match.url)
        return (
            <div>
                <div className='top'>
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jinghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/wenda`}>问答</Link>
                    <Link to={`${url}/zhaopin`}>招聘</Link>
                    <Link to={`${url}/ceshi`}>客户端测试</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All} />
                    <Route path={url+'/jinghua'} component={Jinghua} />
                    <Route path={url+'/share'} component={Share} />
                    <Route path={url+'/wenda'} component={Wenda} />
                    <Route path={url+'/zhaopin'} component={Zhaopin} />
                    <Route path={url+'/ceshi'} component={Ceshi} />
                </div>
            </div>
        )
    }
}
