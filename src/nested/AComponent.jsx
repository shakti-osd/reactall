import React from 'react'

function AComponent(props) {

    return (
        <div>
           
            {props.name} 
            { props.children}
        </div>
    )
}

export default AComponent
