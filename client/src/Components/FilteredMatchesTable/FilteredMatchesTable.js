import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MatchesListContainer from '../MatchesListContainer/MatchesListContainer';

class FilteredMatchesTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {filter: ''}
        this.handleFilterChanged = this.handleFilterChanged.bind(this);
    }

    handleFilterChanged(newFilter){
        this.setState({filter: newFilter});
    }

    render(){
        return(
            <div id="filteredMatchesTable">
                <SearchBar filterText={this.state.filter} onSearchChanged={this.handleFilterChanged}/>
                <MatchesListContainer filterText={this.state.filter}/>
            </div>
        )
    }

}

export default FilteredMatchesTable;