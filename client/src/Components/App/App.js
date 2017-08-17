import React, { Component } from 'react';
import MatchesListContainer from '../MatchesListContainer/MatchesListContainer'
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
        <MatchesListContainer/>
      </div>
    );
  }
}

export default App;
