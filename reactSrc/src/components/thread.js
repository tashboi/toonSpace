import React from 'react';
import ThreadContent from './threadContent.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/**
@Author: Daniel Fimister|18018515
this script is called by the authorPage script in order to create a list of authors that can be identified through the use of the search script utilised by the aforementioned script.
within this script, is code that restricts the items put into an array of authors into 10 per page, and includes buttons to cycle through them; the script also calls an addition author script to handle additional information coming up when the authors name is clicked
**/
class Thread extends React.Component {
	
	constructor(props) {
	super(props);
	this.state = {
    results:[]
   }
}

componentDidMount() {
   const url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/thread"
   fetch(url)
        .then( (response) => {
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText);
            }
        })
        .then( (data) => {
            this.setState({results:data.results}) 
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
        
 }
 filterSearch = (s) => {return s.ThreadTitle.toLowerCase().includes(this.props.search.toLowerCase()) };
 render () {
  console.log(this.state.results)
	 let buttons = ""
	 let filteredResults = this.state.results
	 if (this.props.search !== undefined){
	 filteredResults = this.state.results.filter(this.filterSearch)
	 }
     if (this.props.page !== undefined) {
         const pageSize = 10
         let pageMax = this.props.page * pageSize
         let pageMin = pageMax - pageSize
         
         buttons = (
            <div>
                <button onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
				<button onClick={this.props.handleNextClick} disabled={this.props.page >= Math.ceil(filteredResults.length / pageSize)}>Next</button>
            </div>
         )
		   filteredResults = filteredResults.slice(pageMin,pageMax)
     }
	 return(
		<div>
		{filteredResults.map((thread,i) =>(<ThreadContent key={i} thread={thread}/>))}
		{buttons}
		</div>
	 );
 }
	}
 export default Thread;