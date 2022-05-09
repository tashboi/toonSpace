import React from 'react';
import NewComment from './newComment.js'
import CommentContent from './commentContent.js'/**
@Author: Daniel Fimister|18018515
this script is called by the authors script in order to deal with each indiviual element from the array, calling more data to be shown when the initial element has been clicked.
**/
import TinkerThread from './tinkerThread.js';
class ThreadContent extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            display: false,
			comments: [],
			order: null,
			userID: null
        }
    }
	componentDidMount() {
		const id = this.props.thread.ThreadID
		const url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/comment?id="+id
		fetch(url)
			 .then( (response) => {
				 if (response.status === 200) {
					 return response.json() 
				 } else {
					 throw Error(response.statusText);
				 }
			 })
			 .then( (data) => {
				 this.setState({comments:data.results}) 
			 })
			 .catch ((err) => { 
				 console.log("something went wrong ", err) 
			 });
			 if(localStorage.getItem('loginToken')) {
				this.setState({authenticated:true});
				const id = localStorage.getItem("UserID")
				this.state.userID =  JSON.parse(id);
			}
			 
	  }
	

    handleClick = () => {
        this.setState({display:!this.state.display})
    }


	
 render () {

	 	let indiComments = this.state.comments;
		let paperDetails="";
		let tinker = "";
		if(this.props.thread.AuthorID==this.state.userID){
			tinker = <TinkerThread threadID = {this.props.thread.ThreadID}/>
		}
		else{tinker=""}
		if (this.state.display){
			paperDetails = <div>
			<p>Content: {this.props.thread.ThreadContent}</p>
			<p>ID: {this.props.thread.ThreadID}</p>
			{tinker}
			{indiComments.map((comment,i) =>(<CommentContent key={i} userID={this.state.userID} comment={comment}/>))}
			<p>New Comment:</p>
			<NewComment threadID={this.props.thread.ThreadID} order={indiComments.length+1}/>
			</div>

		}
	 return(
		<div>
			<p>{this.props.thread.ThreadTitle}</p><button onClick={this.handleClick}>Expand</button>
			{paperDetails}
		</div>
	 );
	}
	}
 export default ThreadContent;