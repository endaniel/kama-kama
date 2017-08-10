import React from 'react';
import GambleInfo from '../GambleInfo/GambleInfo';
import './Gamble.css';

class Gamble extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr className="gambleRow">
                <td className="matchName">{this.props.gamble.match}</td>
                <td><button className="gambleBtn">המר</button></td>
                <td><GambleInfo gamble={this.props.gamble}/></td>
            </tr>
        )
    }
}

export default Gamble;