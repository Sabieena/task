import React, { Component } from 'react'
import TodoItem from './component/TodoItem'
import Practice from './component/Practice'
import Test from './component/Test'
import products from './component/ProductData'
import Product from './component/Product'


function App() {
  const productComponents = products.map(items => <Product key={items.id} product={items} />)
  
    return (
      <div className="todo-list">
        {productComponents}
        {/* <Practice />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        {/* <Test
          question="Why does Waldo wear stripes?" punchline="Because he doesn’t want to be spotted.." 
        />
        <Test
           punchline="Hello I am blah blah.." 
        /> */}

        

      </div>
    )
  
}

export default App
