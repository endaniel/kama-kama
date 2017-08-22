import React, { Component } from 'react';
import Header from '../Header/Header';
import FilteredMatchesTable from '../FilteredMatchesTable/FilteredMatchesTable';
import MatchGambles from '../MatchGambles/MatchGambles';
import { Route } from 'react-router-dom';
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
          <Route exact path={"/"} component={FilteredMatchesTable}/>
          <Route exact path={"/gamble/:gambleId"} component={MatchGambles}></Route>
        </div>
      </div>
    );
  }
}

export default App;
