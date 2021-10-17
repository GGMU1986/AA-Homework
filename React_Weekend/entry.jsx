import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    ReactDOM.render(<MyApp />, root)
})