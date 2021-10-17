import React from "react";
import ReactDOM from 'react-dom';
import Clock from './clock'
import Weather from './weather'
import Tabs from './tabs'

const panes = [
    { title: "one", content: "I am one" },
    { title: "two", content: "I am two" },
    { title: "three", content: "I am three" }  
]

function Root() {
    return (
        <div>
            <Clock />
            <Weather />
            <Tabs />
        </div>
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main)
})