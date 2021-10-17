import React from "react";
import ReactDOM from 'react-dom';
import Clock from './clock'
import Weather from './weather'



function Root() {
    return (
        <div>
            <Clock />
            <Weather />
        </div>
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main)
})