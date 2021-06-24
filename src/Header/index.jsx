import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {
  handleKeyUp = (e) => {
    const {keyCode, target} = e;
    if (keyCode !== 13) return;
    if (target.value === '') {
      alert("内容不能为空");
      return
    }
    console.log(target.value);
    const todo = {id: nanoid(), name: target.value, done: false};
    this.props.addTodo(todo);
    target.value = '';
  }
  render() {
    return (
      <div className="header">
        <input onKeyUp={this.handleKeyUp} type="text" className="input" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
