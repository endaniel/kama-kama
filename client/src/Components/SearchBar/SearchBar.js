import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSearchChanged = this.handleSearchChanged.bind(this);
    }

    handleSearchChanged(e){
        this.props.onSearchChanged(e.target.value);
    }

    render(){
        return(<input type="text" value={this.props.filterText} 
                placeholder="חפש לפי קבוצה, ענף, תאריך..." onChange={this.handleSearchChanged}/>);
    }
}

export default SearchBar;