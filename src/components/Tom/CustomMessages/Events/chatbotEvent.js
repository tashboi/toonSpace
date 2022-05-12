import React from "react";
import "../../../../App.css"

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