import React from "react";
import Thread from "./thread.js";
import Search from "./search.js";
import NewThread from "./newThread.js";
import  "./fim.css";
class ThreadPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authenticated:false,
           userID: null,
		   page:1
        }
    }
    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
            const id = localStorage.getItem("UserID")
            this.state.userID =  JSON.parse(id);
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
        return this.state.authenticated? (
            <div id="tbackground">
					<h2>Threads</h2>
				<Search search={this.state.search} handleSearch={this.handleSearch} />
                <NewThread />
				<Thread search={this.state.search} page={this.state.page}  handleNextClick={this.handleNextClick} 
               handlePreviousClick={this.handlePreviousClick} />
            </div>
        ):<div><p>Please Login to view</p></div>
    }
}
export default ThreadPage;