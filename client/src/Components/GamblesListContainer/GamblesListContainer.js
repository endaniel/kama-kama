import React from 'react';
import GamblesList from '../GamblesList/GamblesList'

class GamblesListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {gambles: []};
    }
    
    componentDidMount(){
        fetch('api/a')
            .then(res => res.json())
            .then(gambles => this.setState({gambles: gambles}))
    }
    
    render(){
        return(
            <GamblesList gambles={this.state.gambles}/>
        )
    }
}

export default GamblesListContainer;