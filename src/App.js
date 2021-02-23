import React, { Component } from 'react'
import TodoItem from './component/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
}

export default App
