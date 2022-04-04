import React from "react";
/**
@Author: Daniel Fimister|18018515
This script handles the generation of a searchbar
**/
   
class Search extends React.Component {

    render() {
           return (
               <label>
                   <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
               </label>
           )
       }
   }
   
export default Search;