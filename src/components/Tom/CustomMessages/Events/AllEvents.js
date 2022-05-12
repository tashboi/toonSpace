import React from 'react';
import Chatbotevents from "./Chatbotevents";

/**
 * A Javascript file which is a custom message. The custom message is for displaying all the
 * events from the api.
 *
 * It uses the ChatbotEvents file with the page state. This is so that it will only display 2 events at a time and
 * can display the next returned results by clicking the next and previous button which is on the chatbotevents.
 *
 * The state page is used for pagination
 *
 * @author Thomas Ashby
 */


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