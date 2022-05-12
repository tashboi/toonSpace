import React from "react";

/**
 * A SearchBox which is used to search for events
 *
 * The search box is displayed through an input tag which sets
 * the value to the search prop and binds a function to update the search box everytime there
 * is a new character added or deleted
 *
 * @author Thomas Ashby
 */

class SearchBox extends React.Component {

    render() {
        return (
            <label>
                Search
                <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
            </label>
        )
    }
}

export default SearchBox;