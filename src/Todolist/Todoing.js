import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    // delItem(idx,e){
    //     this.props.del(idx);//则button 内可写成onClick={this.props.del.bind(idx,e)}
    //     console.log(e);
        
    // }
    
    render() {
        var {todo}=this.props;
        var {list}=this.props;
        return (
            <div className="addDoing">
                <div className="list">
                    <h2 >正在进行<span id="todocount" >{todo.length}</span></h2>
                    <ul>
                        {
                            todo.map((item,idx)=>
                                <li key={idx} className="doingList">
                                    <input className='icheck' type='checkbox' checked={false}  value={item} onChange={()=>this.props.addo(idx)}/>{item}
                                    <button className="delbtn" onClick={()=>this.props.delete(idx)}>删除</button>
                                </li>
                            )
                        }
                    </ul>
                    <h2>已经完成<span id="donecount">{list.length}</span></h2>
                    <ul className="over">
                        {
                            list.map((item,idx)=>
                            <li key={idx} className="overList">
                                <input className='ichecked' type='checkbox' checked={true} value={item} onChange={()=>this.props.overdo(idx)} />{item}
                                <button className="delbtn" onClick={()=>this.props.del(idx)}>删除</button>
                            </li>
                        )   
                        }
                    </ul>
                    <div className='foot'>
                        <p className='footer'>Copyright ? 2014 todolist.cn <span className="clear-btn">clear</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
//类型检查
Todoing.propTypes={
    todo:PropTypes.array,
    delte:PropTypes.func
}
Todoing.defaultProps={
    todo:[1,2,3]
}

