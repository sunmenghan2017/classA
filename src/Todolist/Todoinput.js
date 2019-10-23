import React, { Component } from 'react'
import './todo.css'
//受控组件，value值被react控制的表单元素
//可以实时获取表单元素的值（表单验证）/写法相对麻烦
export default class Todoinput extends Component {
    constructor( ){ 
        super(); 
        this.handleInput = this.handleInput.bind(this);
        this.state={
            a:'',
            b:'',
            c:'',
            inputValue:''
        }
    }//箭头函数不需bind
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
        })
    }
    handleChanged=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleInput = (e)=>{
        //绑定this，事件处理函数写成箭头函数，或bind
        if(e.keyCode===13){
            // console.log(e.target.value);
            this.props.add(e.target.value);
            this.state.inputValue='';
        }
    }
    componentDidMount(){
        console.log(this);
        //this.a.focus();//页面加载后第一个input获得焦点
    }
    render() {
        return (
            <div>
                {/* 数值计算 */}
                <div className={this.state.a+this.state.b+this.state.c>10?'box':'box1'}>
                    <label htmlFor="inp">请输入第一个数：</label>
        {/* 受控组件 */}<input id="inp" name="a" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text" /> 
                    +
                    <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text" />
                    +
                    <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text" />
                    =
                    <p>{this.state.a+this.state.b+this.state.c}</p>
                    {/* <input ref={(inp)=>{this.a=inp}} onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text" />
                    +
                    <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text" />
                    +
                    <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text" />
                    =
                    <p>{this.state.b+this.state.c}</p> */}
                    {/* 非受控组件:一次性获取或处理表单元素的值 */}
                    {/* <input ref={(inp)=>{this.inp=inp}} type="text" />
                    <button style={{backgroundColor:'#c4b1a3',color:'red',fontSize:'20px',borderRadius:'5px'}} className="btn" onClick={()=>{console.log(this.inp.value)}}>提交</button>   */}
                </div>
                {/* Todolist的添加TODO： */}
                <div className="addHead">
                    <div className="addList">
                        <label htmlFor="todolist" style={{float:'left'}}><h2>ToDoList</h2></label>
                        <input  className="todolist" name="inputValue" placeholder={'添加ToDoList'} onChange={this.handleChanged} value={this.state.inputValue} onKeyDown={this.handleInput} type="text" /> 
                    </div>
                </div>
            </div>
        )
    }
}
//受控组件：
//1.给input标签添加value属性，赋值为state的值
//2.绑定onChange事件，在事件处理函数中setState
//3.一个事件处理函数控制多个表单时，给input添加name属性，事件处理函数重谢：setState({[e.target.name]:e.target.value})



