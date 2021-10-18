import React, {Component} from 'react';
// import ToDoItem from './ToDoItem';
// import todoData from './reactdata';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1 
            }
        })
    }

    render() {
        // const todoComps = this.state.todos.map(thing => <ToDoItem key={thing.id} item={thing} />)
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        //     <div>
        //         {todoComps}
        //     </div>
        )
    }
}

export default App;