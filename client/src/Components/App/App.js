import React, { Component } from 'react';
import Header from '../Header/Header';
import FilteredMatchesTable from '../FilteredMatchesTable/FilteredMatchesTable';
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
        <div className="appContent">
          <FilteredMatchesTable/>
        </div>
      </div>
    );
  }
}

export default App;
