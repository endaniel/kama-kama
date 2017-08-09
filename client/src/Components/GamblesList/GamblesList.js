import React from 'react';

class GamblesList extends React.Component{
    constructor(){
        super()
        this.state = {gambles: []}
    }

  componentDidMount(){
    this.getA();
  }

  getA = () => {
    fetch('/api/a')
      .then((res) => res.json())
      .then(gambles => this.setState({gambles}))
  }

    render(){
        return(
            <div id="gamblesList">
                {this.state.gambles.map(g => <h1>{g}</h1>)}
            </div>
         )
    }
}

export default GamblesList;