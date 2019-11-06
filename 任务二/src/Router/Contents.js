import React from 'react';
import {Link,Route} from 'react-router-dom'
import Substance from './Substance';
//无状态组件
export default class Contents extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount() {
         let page=this.props.match.params.id;
        let url='https://cnodejs.org/api/v1/topics?tab=share&&page='+page;
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            let url='https://cnodejs.org/api/v1/topics?tab=share&&page='+page;
            fetch(url)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data:res.data
                    })
                })
        }
    }
    render(){
        return (
            <div>
                {/* Content{props.match.params.id} */}
                {/* {props.children} */}
                {/* <button onClick={toHoc}>hoc</button> */}
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} style={{border:'1px solid grey',width:'100%',height:50,overflow:'hidden'}}>
                            <div style={{height:30,margin:'10px 0'}}>
                                <img src={item.author.avatar_url} style={{float:'left',padding:'0 10px',width:50,height:30}}/>
                                <span style={{float:'left',paddingRight:10}}>{item.reply_count}/{item.visit_count}</span>
                                <h4 style={{float:'left'}}><Link to={'/substance/'+item.id} >{item.title}</Link></h4>
                                <span style={{float:'right',paddingRight:10}}>1天前</span>
                                <img style={{float:'right',paddingRight:10,width:30,height:30}} src={"../../logo192.png"}/>
                                {/* <Link to='/contentc'>{item.title}</Link> */}
                                {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                            </div>
                        </div>
                    ))
                }
                
                <Route path='/substance/:id' component={Substance}/>
            </div>
        )
    }
    
}