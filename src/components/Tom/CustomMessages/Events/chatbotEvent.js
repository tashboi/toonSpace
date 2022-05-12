import React from "react";
import "../../../../App.css"

/**
 * A Javascript file which displays a single event. ChatbotEvents displays all the events but ChatbotEvent displays a singular event.
 * It loops through every event which is present and displays them in their own indiviual table.
 *
 * The information is hidden and only can be displayed after Clicking the event title. Only event titles are displayed at first.
 * The details are stored as variable which only displays if the state display is true.
 *
 *
 * @author Thomas Ashby
 */


class ChatbotEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }

    render() {
        let details = ""

        if (this.state.display) {
            details =
                <table className="ChatbotEvents">
                        <tr>Description: {this.props.event.description}</tr>
                        <tr>Category: {this.props.event.category}</tr>
                        <tr>Country: {this.props.event.country}</tr>
                        <tr>City: {this.props.event.city}</tr>
                </table>

        }

        return(
            <div>
                <h2 onClick={this.handleClick}>{this.props.event.title}</h2>
                {details}

            </div>
        )
    }
}

export default ChatbotEvent;