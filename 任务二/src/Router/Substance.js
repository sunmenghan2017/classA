import React from 'react';
//无状态组件
export default class Substance extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            title:[]
        }
    }
    componentDidMount() {
         let page=this.props.match.params.id;
        let url='https://cnodejs.org/api/v1/topic/'+page;
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    title:res.data.title,
                    data:res.data.content
                })
                // console.log(res.data.content);
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            let url='https://cnodejs.org/api/v1/topic/'+page;
            fetch(url)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        title:res.data.title,
                        data:res.data.content
                    })
                    // console.log(res.data.content);
                })
        }
    }
    render(){
        
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html:this.state.title}}></h1>
                <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
            </div>
        )
    }
    
}