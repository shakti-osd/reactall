import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickComponent extends Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Count {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickComponent)
