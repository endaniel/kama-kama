import React from 'react';

class MatchGambles extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <h1>{this.props.match.params.gambleId}</h1>
        )
    }
}
export default MatchGambles;