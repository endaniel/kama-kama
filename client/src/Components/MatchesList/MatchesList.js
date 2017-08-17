import React from 'react';
import Match from '../Match/Match';
import './MatchesList.css'

class MatchesList extends React.Component{
    render(){
        return(
            <div id="matchesList">
                <table>
                    <tbody>
                        {this.props.matches.map(m => <Match match={m}/>)}
                    </tbody>
                </table>
            </div>
         )
    }
}

export default MatchesList;