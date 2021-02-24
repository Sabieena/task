import React, { Component } from 'react'
import TodoItem from './component/TodoItem'
import Practice from './component/Practice'

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <Practice />
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </div>
    )
  }
}

export default App
