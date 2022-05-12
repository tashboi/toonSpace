import React from 'react';
import Chatbotevents from "./Chatbotevents";

class AllEvents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }


    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }


    handlePreviousClick = () => {
        this.setState({page:this.state.page-1})
    }


    render(){
        return (

            <div className = "react-chatbot-kit-chat-bot-message">
                <Chatbotevents page={this.state.page} handleNextClick={this.handleNextClick}
                               handlePreviousClick={this.handlePreviousClick} />
            </div>

        );
    }

};

export default AllEvents;