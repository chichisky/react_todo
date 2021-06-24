import React, { Component } from 'react'
import Item from './Item'
import './index.css'
import PropTypes from 'prop-types'
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updataeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (
      <div className="list">
        <ul>
          {
            todos.map(e => {
              return <Item {...e} key={e?.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
      </div>
    )
  }
}
