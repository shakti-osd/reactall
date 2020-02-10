import React, {useState} from 'react'

function ArrayStateComponent() {
    const [items, setItems] =useState([]);

    const clickHandler = () =>{
        setItems([
            ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() * 100) + 1 
            }
        ])
    }

    return (
        <div>
            <button onClick={clickHandler}>Add Item</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>

        </div>
    )
}

export default ArrayStateComponent
