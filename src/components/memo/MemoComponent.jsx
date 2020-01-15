import React from 'react'

function MemoComponent(props) {   
    console.log('Rendering Memo Component');
    return (
        <div>
            Memo Componet1
            <p>{props.name}</p>
        </div>
    )
}

export default React.memo(MemoComponent);
