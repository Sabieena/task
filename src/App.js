import React, { Component } from 'react'
import TodoItem from './component/TodoItem'
import Practice from './component/Practice'
import Test from './component/Test'

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        {/* <Practice />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        <Test
          question="Why does Waldo wear stripes?" punchline="Because he doesn’t want to be spotted.." 
        />
        <Test
           punchline="Hello I am blah blah.." 
        />

      </div>
    )
  }
}

export default App
