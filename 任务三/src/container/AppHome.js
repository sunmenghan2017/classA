import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel,Grid } from 'antd-mobile';
const data = Array.from(new Array(3)).map((_val, i) => ({
    icon:require('../images/g'+`${i+1}`+'.png'),
    
  }));
  const data1 = Array.from(new Array(1)).map((_val, i) => ({
    icon:require('../images/banner2.png'),
    
  }));
export default class AppHome extends Component {
    render() {
        return (
            <div style={{width: '100%',height: '100%'}}>
                <NavBar
                    // mode="light"
                    style={{background:'#33cccc',color:'#fff',height:128,fontSize:16}}
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     // <Icon key="1" type="ellipsis" />,
                    // ]}
                    >住吧家居
                </NavBar>
                <div style={{height: '400px',background:'#eee'}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2].map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 400 }}
                            >
                            <img
                                src={require('../images/banner'+`${val}`+'.png')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div style={{width: '100%',height: '268px',background:'#fff',}}>
                <Grid data={data} style={{height: '250px' }}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{height: '220px' ,  padding: '12.5px' }}>
                        <img src={dataItem.icon} style={{ width: '220px', height: '220px' }} alt="" />
                        </div>
                    )}
                />
                {/* <Grid data={data1} style={{height: '450px' }}
                    renderItem={dataItem => ( */}
                        <div style={{height: '450px' }}>
                            <h1 style={{ marginLeft:10,width:'95%',lineHeight:'60px',borderLeft:'5px solid red' }}>热门推荐</h1>
                        <img src={require('../images/banner2.png')} style={{float:'left', width: '750px', height: '400px' }} alt="" />
                        </div>
                    {/* )}
                /> */}
                </div>
            </div>
        )
    }
}
