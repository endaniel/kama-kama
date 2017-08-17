import React from 'react';
import MatchInfo from '../MatchInfo/MatchInfo';
import './Match.css';

class Match extends React.Component{
    render(){
        return(
            <tr className="matchRow">
                <td className="matchName">{this.props.match.name}</td>
                <td><button className="matchBtn">המר</button></td>
                <td><MatchInfo match={this.props.match}/></td>
            </tr>
        )
    }
}

export default Match;