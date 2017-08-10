import React from 'react';
import Gamble from '../Gamble/Gamble';
import './GamblesList.css'

class GamblesList extends React.Component{
    constructor(props){
        super(props)
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
                <table>
                    <tbody>
                        {this.state.gambles.map(g => <Gamble gamble={g}/>)}
                    </tbody>
                </table>
            </div>
         )
    }
}

export default GamblesList;