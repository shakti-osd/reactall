import React from 'react'

function BComponent(props) {
    const updatedChildren = ' || Test: ' + props.children
    
    return (
        <div>
          
            {props.name}          
            {props.children ? updatedChildren : null}
        </div>
    )
}

// const BComponent =  React.createRef((props,ref) => {

//     return(
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// })

 export default BComponent
