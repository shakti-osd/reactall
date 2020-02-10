import React from 'react'

function ChildInput(props) {
    return (
        <div>
            <button onClick={() => props.clickMe('Child Component')} >Click Me</button>
        </div>
    )
}

export default ChildInput
