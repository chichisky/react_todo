import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  handleCheck = (e) => {
    const {id, updateTodo} = this.props
    updateTodo(id, e.target.checked);
  }
  handleDelete = () => {
    const {id, deleteTodo} = this.props
    if (window.confirm('确定要删除吗？')) {
      deleteTodo(id)
    }
  }
  render() {
    const {name, done} = this.props
    return (
      <li className= "item">
      <label>
        <input type="checkbox" checked={done} onChange={this.handleCheck}/>
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" style={{display:'none'}} onClick={this.handleDelete}>删除</button>
     
      </li>
    )
  }
}
