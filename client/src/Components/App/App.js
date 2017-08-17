import React, { Component } from 'react';
import GamblesListContainer from '../GamblesListContainer/GamblesListContainer'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <GamblesListContainer/>
      </div>
    );
  }
}

export default App;
