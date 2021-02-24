import React, { Component } from 'react'

class Practice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Sabina Bhattarai",
             age:"25"
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
            </div>
        )
    }
}

export default Practice
