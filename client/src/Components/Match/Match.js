import React from 'react';
import MatchInfo from '../MatchInfo/MatchInfo';
import { Link } from 'react-router-dom';
import './Match.css';

class Match extends React.Component{
    render(){
        return(
            <tr className="matchRow">
                <td className="matchName">{this.props.match.name}</td>
                <td><Link to={"/gamble/" + this.props.match._id}>המר</Link></td>
                <td><MatchInfo match={this.props.match}/></td>
            </tr>
        )
    }
}

export default Match;