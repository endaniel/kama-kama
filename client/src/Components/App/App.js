import React, { Component } from 'react';
import GamblesList from '../GamblesList/GamblesList'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {data: []};
  }


  render() {
    return (
      <div className="App">
        <GamblesList/>
      </div>
    );
  }
}

export default App;
