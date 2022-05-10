import React from "react";

class Event extends React.Component {
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
                <table>
                    <tr>Description: {this.props.event.description}</tr>
                    <tr>Category: {this.props.event.category}</tr>
                    <tr>Country: {this.props.event.country}</tr>
                    <tr>City: {this.props.event.city}</tr>
                    <tr>Price: £{this.props.event.price}</tr>
                    <tr>Date: {this.props.event.date}</tr>
                </table>

        }

        return(
            <div id = "eventarea">
                <h2 onClick={this.handleClick}>{this.props.event.title}</h2>
                <img src={"http://unn-w18011022.newnumyspace.co.uk/imgs/" + this.props.event.IMGurl} alt="image" className="image"/>
                {details}

            </div>
        )
    }
}

export default Event;