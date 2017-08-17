import React from 'react';
import Gamble from '../Gamble/Gamble';
import './GamblesList.css'

class GamblesList extends React.Component{
    render(){
        return(
            <div id="gamblesList">
                <table>
                    <tbody>
                        {this.props.gambles.map(g => <Gamble gamble={g}/>)}
                    </tbody>
                </table>
            </div>
         )
    }
}

export default GamblesList;