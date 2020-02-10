import React, {useState} from 'react'

function ObjectStateComponent() {
    const [name, setName] = useState({firstName: '', lastName:''});
    const [fullname, setFullname] = useState('');

    const clickHandler = () => {
        setFullname(() => `Your Full Name is ${name.firstName} ${name.lastName}`)
    }
    return (
        <div>
            <input 
                onChange={e => setName({...name, firstName: e.target.value })} 
                type='text'  
                value={name.firstName} />
            <input 
                onChange={e => setName({...name, lastName: e.target.value })}  
                type='text' 
                value={name.lastName} />
            <button 
                onClick={clickHandler}
                >Get Full Name</button>
            <div>{fullname}</div>
        </div>
    )
}

export default ObjectStateComponent
