import React, {useState, useEffect} from 'react'

function HooksCounterEffect() {

    const [count, setCount] = useState(0)
    const [name, setname] = useState('')

    useEffect( () => {
        console.log('useEffect - Updating Title')

        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <input type="text" value={name} onChange={ e => setname(e.target.value)} />
            <button onClick={ () => setCount(count+1)} >Clicked {count} times</button>
        </div>
    )
}

export default HooksCounterEffect
