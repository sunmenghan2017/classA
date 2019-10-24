
import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css'
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[],
            list:[],
            a:100,
            b:200
        }
        // 深拷贝\浅拷贝
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 = {c:300};
        // var o = {...obj};
        // var o = Object.assign({},obj,obj1);
        // 深拷贝
        // var o = JSON.parse(JSON.stringify(obj));
        // o.b[0] = 200;
        // console.log(o===obj);
        // 遍历对象
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item)
        //     console.log(obj[item])
        // })

    }
    addItem = (data)=>{
        // this.state.todo.push(data);
        this.setState({
            todo: [...this.state.todo,data]
            
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    
    delItem = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        
        // 2、setState是异步执行
        this.setState((state,props)=>{
            // let todo = [...state.todo];
            // todo.splice(idx,1);
            console.log(state.todo);
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })

        // 在setState里获取state可能会出错，不是你想要的值
        // 可以像上面那样，把第一个参数写成函数，解决该问题
        // this.setState({
        //     todo: this.state.num + 100
        // },()=>{
        //     console.log(this.state.todo)
        // })
    }
    addOver=(idx)=>{
        this.setState(()=>{
            this.state.list.push(this.state.todo[idx]);
            this.delItem(idx);   
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
            localStorage.setItem('list',JSON.stringify(this.state.list))
        })

    }

    delteItem = (idx)=>{
        this.setState((state,props)=>{
            console.log(state.list);
            return {
                list: state.list.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('list',JSON.stringify(this.state.list))
        })
    }
    clear=()=>{
        localStorage.clear();
        //load();
    }
    overDoing=(idx)=>{
        this.setState(()=>{
            this.state.todo.push(this.state.list[idx]);
            this.delteItem(idx);    
        },()=>{
            localStorage.setItem('list',JSON.stringify(this.state.list))
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })

    }
    

    componentDidMount() {
        let todolist = JSON.parse(localStorage.getItem('todo'));
        let overlist = JSON.parse(localStorage.getItem('list'));
        if(todolist&&overlist){
            this.setState((state,props)=>{
                return{
                    todo:todolist,
                    list:overlist
                }
            })
        }
    }
    
	render() {
        return (
            <div className='boxList'>
                <Todoinput add={this.addItem} />
                <Todoing addo={this.addOver} overdo={this.overDoing} addnum={this.changeNum} todo={this.state.todo} list={this.state.list} del={this.delteItem} delete={this.delItem} clear={this.state.todo.clear} check={this.checkboxCheck} checked={this.checkboxChecked}/>
            </div>
        )
    }
}
