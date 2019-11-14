import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel,Grid } from 'antd-mobile';
const data = Array.from(new Array(10)).map((_val, i) => ({
    icon:require('../images/shop'+`${i+1}`+'.png'),
    text:"桌"
  }));

  const data2 = Array.from(new Array(2)).map((_val, i) => ({
    icon:require('../images/s'+`${i+1}`+'.png'),
    
  }));
export default class AppShop extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{background:'#33cccc',color:'#fff',height:128,fontSize:16}}
                    rightContent={[
                        <icon style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shangcheng1'></icon>,
                       
                    ]}
                    >商城
                </NavBar>
                <div style={{height: '420px',background:'#eee'}}>
                    <Carousel
                        autoplay={true}y
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                
                        {[1,2,3,4].map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 410 }}
                            >
                                <div>
                                    <input style={{float:'left',color:'#fff',width:638,height:68,fontSize:16,marginLeft:'85px',borderRadius:10}}                            
                                    type='search' placeholder='输入关键字搜索' />
                                    <img
                                        src={require('../images/banner'+`${val}`+'.png')}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {window.dispatchEvent(new Event('resize'));}}
                                    />
                                </div>
                            
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div style={{width: '100%',height: '268px',background:'#fff',paddingTop:30}}>
                <Grid data={data} style={{height: '350px',padding:'12.5px'  }}
                    columnNum={5}
                    renderItem={dataItem => (
                        <div style={{ width: '100px',height: '130px',marginLeft:'25px'}}>
                            <div style={{ width: '90px',height: '90px',borderRadius:'45px',background:'red'  }}>
                            <img src={dataItem.icon} style={{ width: '80px', height: '80px' }} alt="" />
                            </div>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
                <Grid data={data2} style={{height: '400px',marginTop: '10px' }}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{height: '360px'  }}>
                        <img src={dataItem.icon} style={{ width: '300px', height: '300px' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px'}}>
                                <p>顺顺工艺欧式风格 Too Art Studio 精细风格</p>
                                <p style={{ color: 'black', fontSize: '16px'}}>￥83.99</p>
                            </div>
                        </div>
                    )}
                />
                </div>
            </div>
        )
    }
}
