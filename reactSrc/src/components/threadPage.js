import React from "react";
import Thread from "./thread.js";
import Search from "./search.js";
import  UserContext from "./userContext.js";
class ThreadPage extends React.Component {
    static contextType = UserContext;   
    constructor(props) {
        super(props)
        this.state = {
            Authenticated:false,
           userID: null,
		   page:1
        }
    }
    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
            const id = localStorage.getItem("UserID")
            console.log(id);
            this.state.userID =  JSON.parse(id);
            console.log("userid= "+this.state.userID);
        }
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value, page:1})
    }
	 handleNextClick = () => {
     this.setState({page:this.state.page+1})
 }
 handlePreviousClick = () => {
    this.setState({page:this.state.page-1})
 }

    render() {
        console.log(this.state.search)
        return (
            <div>
					<h2>Thread Page</h2>
				<Search search={this.state.search} handleSearch={this.handleSearch} />
				<Thread search={this.state.search} page={this.state.page}  handleNextClick={this.handleNextClick} 
               handlePreviousClick={this.handlePreviousClick} />
            </div>
        )
    }
}
export default ThreadPage;