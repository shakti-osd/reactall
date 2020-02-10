import React, { Component } from 'react'
import ChildInput from './ChildInput'

class ParentInput extends Component {
   

    clickHandler = (childName) => {
        alert(`Received Parent from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildInput clickMe={this.clickHandler} />
            </div>
        )
    }
}

export default ParentInput
