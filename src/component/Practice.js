import React, { Component } from 'react'

class Practice extends Component {
    constructor() {
        super()
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let wordDisplay
        if(this.state.isLoggedIn === true){
            wordDisplay = "in"
        } else{
            wordDisplay ="out"
        }
        return (
            <div>
                <h1> You are currently {wordDisplay}</h1>
               
            </div>
        )
    }
}

export default Practice
