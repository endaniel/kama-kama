import React, { Component } from 'react';
import GamblesList from '../GamblesList/GamblesList'
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
        <GamblesList/>
      </div>
    );
  }
}

export default App;
