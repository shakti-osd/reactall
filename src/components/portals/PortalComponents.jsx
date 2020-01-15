import React from 'react'
import ReactDOM from 'react-dom'

function PortalComponents() {
    return ReactDOM.createPortal(
        <div>Portal Component Outside from Main Application DOM</div>
        ,document.getElementById('portal-root')
    )
}

export default PortalComponents
