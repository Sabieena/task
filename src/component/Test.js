import React from 'react'

function Test(props) {
    return (
        <div>
            <h1>Jokes With Punchline</h1>
            <h2>Question: {props.question}</h2>
            <h3>Punchline: {props.punchline} </h3>
        </div>
    )
}

export default Test
