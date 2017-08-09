import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {data: []};
  }

  componentDidMount(){
    this.getA();
  }

  getA = () => {
    fetch('/api/a')
      .then((res) => res.json())
      .then(data => this.setState({data}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.data.map(aa => <h1>{aa}</h1>)}
        </p>
      </div>
    );
  }
}

export default App;
