import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';

export default class AppMy extends Component {
    render() {
        return (
            // 我的 内容页不写   
            <div>
                <NavBar
                    // mode="light"
                    style={{background:'#33cccc',color:'#fff',height:128,fontSize:16}}
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <icon style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shezhi'/>,
                        // <Icon key="0" type="setting"  style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    >我的
                </NavBar>
                <div style={{height: '400px',background:'#eee'}}>
                    
                </div>
                <div style={{width: '100%',height: '268px',background:'#fff',paddingTop:30}}>
                    
                </div>
            </div>
        )
    }
}
