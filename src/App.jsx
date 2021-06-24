import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import List from './List'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id: '001', name: '吃饭', done: false},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '敲代码', done: false}
    ]
  }
  // header
  addTodo = (todo) => {
    const {todos} = this.state
    todos.unshift(todo);
    this.setState({
      todos
    })
  }
  // list
  updateTodo = (id, val) => {
    const {todos} = this.state
    todos.map(e => {
      if (e.id === id) {
        e.done = val
      }
    })
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    const {todos} = this.state
    let current = []
    todos.map(e => {
      if (e.id !== id) {
        current.push(e)
      }
    })
    this.setState({
      todos: current
    })
  }
  // footer
  clearAllTodo = () => {
    const {todos} = this.state
    let current = []
    todos.map(e => {
      if (!e.done) {
        current.push(e)
      }
    })
    this.setState({
      todos: current
    })
  }
  checkAllTodo = (value) => {
    const {todos} = this.state
    todos.map(e => {
      e.done = value
    })
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div id="app">
        <div className="container">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} clearAllTodo={this.clearAllTodo} checkAllTodo={this.checkAllTodo}/>
        </div>
      </div>
    )
  }
}
