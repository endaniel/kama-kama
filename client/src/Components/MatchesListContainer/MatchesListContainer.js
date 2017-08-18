import React from 'react';
import MatchesList from '../MatchesList/MatchesList'

class MatchesListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {matches: []};
        this.getFilterMatches = this.getFilterMatches.bind(this);
    }
    
    componentDidMount(){
        fetch('api/a')
            .then(res => res.json())
            .then(matches => this.setState({matches: matches}))
    }

    getFilterMatches(){
      return this.state.matches.filter(match => match.name.indexOf(this.props.filterText) !== -1);
    }
    
    render(){
        return(
            <MatchesList matches={this.getFilterMatches()}/>
        )
    }
}

export default MatchesListContainer;