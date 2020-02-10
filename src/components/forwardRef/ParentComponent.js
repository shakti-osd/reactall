import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)   
        
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <ChildComponent ref={this.inputRef} />
                <button onClick={this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default ParentComponent
