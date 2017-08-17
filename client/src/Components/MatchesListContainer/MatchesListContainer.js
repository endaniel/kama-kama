import React from 'react';
import MatchesList from '../MatchesList/MatchesList'

class MatchesListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {matches: []};
    }
    
    componentDidMount(){
        fetch('api/a')
            .then(res => res.json())
            .then(matches => this.setState({matches: matches}))
    }
    
    render(){
        return(
            <MatchesList matches={this.state.matches}/>
        )
    }
}

export default MatchesListContainer;