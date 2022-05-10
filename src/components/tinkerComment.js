import React from "react";
class TinkerComment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        userID: null,
        NCID: Math.floor(Math.random()*100000),
        content: "",
        newTitle: "",
        display: false,
        cdisplay: false,
        }
        this.handleNewContent = this.handleNewContent.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.confirmDelete=this.confirmDelete.bind(this)
    }
    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
            const id = localStorage.getItem("UserID")
            this.state.userID =  JSON.parse(id);
        }
    }
    handleSubmitClick = () => {
        let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/ecomment" 
        console.log(this.props.commentID )
        console.log(this.state.content)
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('commentid', this.props.commentID);
        formData.append('content', this.state.content);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
           // window.location.reload()
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
                    window.location.reload()
                })
                .catch ((err) => {
                    console.log("something went wrong ", err)
                    }
                );
                }
    handleNewContent(e){
        this.setState({content : e.target.value});
    }
    handleUpdate = () => {
        this.setState({display:!this.state.display})
    }
    handleNewTitle(e){
        this.setState({newTitle:e.target.value})
    }
    handleDelete=()=>{
        this.setState({cdisplay:!this.state.cdisplay})
        this.setState({display:false})
    }
    confirmDelete=()=>{
        let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/dcomment" 
        console.log("this will delete")
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('commentid', this.props.commentID);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
                    // Successful authentication will return
                    // a 200 status code.
                   window.location.reload(); 
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
    render(){
        let Content = null
        let deleteConfirm = null;
        if (this.state.display){
        if (this.state.authenticated){
         Content= <label>
            Thread Content: <br />
            <textarea value={this.state.content} onChange={this.handleNewContent} /><br/>
            <button onClick={this.handleSubmitClick}>Submit</button>
         </label>
        }
        else {Content = null}
        }
        else {Content = null}
        if(this.state.cdisplay){
            deleteConfirm = <div><button onClick={this.confirmDelete}>Yes</button><button onClick={this.handleDelete}>no</button></div>
        }
        else {deleteConfirm = null}
        return(
            <div>
            <button onClick={this.handleUpdate}>
                Update
            </button>
            <button onClick={this.handleDelete}>
                Delete Comment
            </button>
            <br />
            {deleteConfirm}<br/>
            {Content}
            </div>
        )
    }

}
export default TinkerComment;