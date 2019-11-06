import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Contentj from '../../../Router/Contentj';

export default class Jinghua extends Component {
    render() {
        var list=[1,2,3,4,5,6,7,8,9,10];
        return (
            <div style={{float:'left',border:'2px solid red',marginLeft:0,width:'100%'}}>
                Jinghua<NavLink to={'home/jinghua'}></NavLink>
                <div style={{float:'left',marginLeft:0,width:'100%'}}>
                <Route exact path='/home/jinghua' component={Contentj} />
                <Route path='/home/jinghua/content/:id' component={Contentj} />
                </div>
                <ul style={{padding:'0 10px' ,margin:'0 auto',marginBottom:8,width:'550px',height:'50px'}}>
                   {
                        list.map((item)=>(
                            <li key={item} style={{ width:'50px',fontSize:30,border:'1px solid grey',padding:'5px 15px',listStyle:'none',display:'inline-block'}}>
                                <NavLink activeStyle={{background:'red'}}
                            to={'/home/jinghua/content/'+item}
                                >{item}</NavLink>
                            </li>
                        
                        ))
                    }
                </ul>
            </div>
        )
    }
}
