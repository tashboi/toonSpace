import React from "react";
class NewThread extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        userID: null,
        NCID: Math.floor(Math.random()*100000),
        content: "",
        newTitle: "",
        display: false,
        }
        this.handleNewContent = this.handleNewContent.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleNewTitle=this.handleNewTitle.bind(this);
    }
    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
            const id = localStorage.getItem("UserID")
            this.state.userID =  JSON.parse(id);
        }
    }
    handleSubmitClick = () => {
        let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/thread" 
    
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('threadid', this.state.NCID);
        formData.append('userid', this.state.userID);
        formData.append('title',this.state.newTitle);
        formData.append('content', this.state.content);
    
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
    handleNewContent(e){
        this.setState({content : e.target.value});
    }
    handleNewThread = () => {
        this.setState({display:!this.state.display})
    }
    handleNewTitle(e){
        this.setState({newTitle:e.target.value})
    }

    render(){
        let Content = null
        if (this.state.display){
        if (this.state.authenticated){
         Content= <label>
            Thread Title:
            <input type='text' value={this.state.newTitle} onChange={this.handleNewTitle}/><br/>
            Thread Content: <br />
            <textarea value={this.state.content} onChange={this.handleNewContent} /><br/>
            <button onClick={this.handleSubmitClick}>Submit</button>
         </label>
        }
        else {Content = <p>login to create a thread</p>}
    }
    else {Content = null}
        return(
            <div>
            <button onClick={this.handleNewThread}>
                New Thread
            </button><br />
            {Content}
            </div>
        )
    }

}
export default NewThread;