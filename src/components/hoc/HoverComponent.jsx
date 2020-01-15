import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverComponent extends Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>Heading Count {count} times
            </h2>
        )
    }
}

export default withCounter(HoverComponent)
