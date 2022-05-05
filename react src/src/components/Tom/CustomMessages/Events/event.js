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
                <div>
                    <p>{this.props.event.title}</p>
                    <p>{this.props.event.category}</p>
                </div>
        }

        return(
            <div>
                <p onClick={this.handleClick}>{this.props.event.title}</p>
                {details}
            </div>
        )
    }
}

export default Event;