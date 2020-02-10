import React, {useContext} from 'react'

import { UserContext } from './userContext'


function CComponent() {

    const user = useContext(UserContext)

    return (
        <div>
            {user}
        </div>
    )
}

export default CComponent
