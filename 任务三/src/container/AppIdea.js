import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Grid } from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩'},
  ];
  const data = Array.from(new Array(6)).map((_val,i) => ({
    icon:require('../images/g'+`${i+1}`+'.png'),
    
  }));
export default class AppIdea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    // mode="light"
                    style={{background:'#33cccc',color:'#fff',height:128,fontSize:16}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}

                >灵感
                </NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{height: '1050px'}}>
                        <Grid data={data} 
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{height: '380px' }}>
                                    <img src={dataItem.icon} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>橙色律动</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{height: '1050px'}}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ height: '380px'  }}>
                                    <img src={require('../images/g5.png')} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>儿童房</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{height: '1050px'}}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ height: '380px'  }}>
                                    <img src={require('../images/g6.png')} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>角落里的遐想</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{height: '1050px'}}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ height: '380px'  }}>
                                    <img src={dataItem.icon} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>橙色律动</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{height: '1050px'}}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ height: '380px'  }}>
                                    <img src={dataItem.icon} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>橙色律动</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{height: '1050px'}}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ height: '380px'  }}>
                                    <img src={dataItem.icon} style={{ width: '335px', height: '335px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                                    <span>橙色律动</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </Tabs>
            </div>
        )
    }
}
