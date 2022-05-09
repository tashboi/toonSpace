import React from 'react';
import TinkerComment from './tinkerComment';
/**
@Author: Daniel Fimister|18018515
this script is called by the authors script in order to deal with each indiviual element from the array, calling more data to be shown when the initial element has been clicked.
**/
class CommentContent extends React.Component {
  constructor(props) {
        super(props)
    }

	
 render () {
	 let tinker=null
	 console.log(this.props.comment.AuthorID)
	if(this.props.comment.AuthorID==this.props.userID){
		tinker = <TinkerComment commentID={this.props.comment.CommentID}/>
	}
	else {tinker=null}
	 return(
		 
		<div>
			<p>{this.props.comment.cContent}</p>
			{tinker}
		</div>
	 );
	}
	}
 export default CommentContent;