import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.click = this.click.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({ num1: e.target.value ? parseInt(e.target.value) : 0 })
  }

  setNum2(e) {
    e.preventDefault();
    this.setState({ num2: e.target.value ? parseInt(e.target.value) : 0 })
  }

  click(e) {
    e.preventDefault();
    this.setState({ num1: '', num2: '', result: 0 });
  }

  add(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2 })
  }

  sub(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 - this.state.num2 })
  }

  multiply(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 * this.state.num2 })
  }

  divide(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 / this.state.num2 })
  }

  render(){
    
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.click}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
