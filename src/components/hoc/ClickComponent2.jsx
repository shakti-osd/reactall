import React, { Component } from 'react'
import withCounter2 from './withCounter2'
class ClickComponent2 extends Component {
    render() {
        const {count, incrementCount, decrementCount} = this.props
        return (
            <div>
                Click {count} times
              <button onClick={incrementCount} >Increment</button> 
              <button onClick={decrementCount} >Decrement</button> 
            </div>
        )
    }
}

export default withCounter2(ClickComponent2)
