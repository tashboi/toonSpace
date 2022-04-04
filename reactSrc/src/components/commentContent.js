import React from 'react';
/**
@Author: Daniel Fimister|18018515
this script is called by the authors script in order to deal with each indiviual element from the array, calling more data to be shown when the initial element has been clicked.
**/
class CommentContent extends React.Component {
  constructor(props) {
        super(props)
    }

	
 render () {
	 return(
		<div class="items">
			<p>{this.props.comment.cContent}</p>
		</div>
	 );
	}
	}
 export default CommentContent;