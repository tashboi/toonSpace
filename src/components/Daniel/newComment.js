import React from "react";
class NewComment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        userID: null,
        NCID: Math.floor(Math.random()*100000),
        content: "",
        }
        this.handleNewContent = this.handleNewContent.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }
    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
            const id = localStorage.getItem("UserID")
            this.state.userID =  JSON.parse(id);
        }
    }
    handleSubmitClick = () => {
        let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/comment" 
    
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('id', this.props.threadID);
        formData.append('userid', this.state.userID);
        formData.append('order', this.props.order);
        formData.append('commentid', this.state.NCID);
        formData.append('content', this.state.content);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
                    // Successful authentication will return
                    // a 200 status code.
                    if (response.status === 200) {
                        return response.json() 
                    } else {
                        throw Error(response.statusText)
                    }
                })
                .then( (data) => {
                    console.log(data)
                })
                .catch ((err) => {
                    console.log("something went wrong ", err)
                    }
                );
                }
    handleNewContent(e){
        this.setState({content : e.target.value});
    }

    render(){
        let buttons = null
        if (this.state.authenticated){
           buttons = <button onClick={this.handleSubmitClick}>Submit</button>
        }
        else {buttons = <p>login to submit a comment</p>}
        
        return(
                <div>
                <form>
                <label>
                Content:
                <textarea value={this.state.content} onChange={this.handleNewContent} />
                </label><br/>
                {buttons}
                </form>
            </div>
        )
    }

}
export default NewComment;