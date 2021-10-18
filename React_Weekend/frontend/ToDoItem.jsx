import React from 'react';

function handleChange() {
    console.log("change")
}

function ToDoItem(props) {
    return (
        <form action="">
            <input 
                onChange={handleChange}
                type="checkbox" 
                id="market"
                checked={props.item.complete}    
            />
            <label htmlFor="market">{props.item.text}</label>
            <br/><br/>
        </form>
    )
}

export default ToDoItem;