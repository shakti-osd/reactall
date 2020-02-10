import React, {useState} from 'react'

function UseStateComponent() {

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount( prevCount => prevCount + 1)
    }
    return (
        <div>
            <button onClick={clickHandler}>Count {count} times</button>
        </div>
    )
}

export default UseStateComponent
