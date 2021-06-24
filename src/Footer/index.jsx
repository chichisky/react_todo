import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleAllClear = () => {
    this.props.clearAllTodo();
  }
  handlerAllCheck = (e) => {
    // console.log(e.target.checked);
    this.props.checkAllTodo(e.target.checked);
  }
  render() {
    const {todos} = this.props
    const cur = todos.reduce((pre, todo) => {
      return pre + (todo?.done ? 1 : 0)
    }, 0)
    
    return (
      <div className="footer">
        <input type="checkbox" onChange={this.handlerAllCheck} checked={todos.length === 0 ? false:(cur === todos.length ? true: false)}/>
        <span>已完成{cur}/全部{todos.length}</span>
        <button className="btn btn-danger" onClick={this.handleAllClear}>清除已完成任务</button>
      </div>
    )
  }
}
