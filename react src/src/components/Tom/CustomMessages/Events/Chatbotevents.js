import React from "react";
import ChatbotEvent from "./chatbotEvent";

class Chatbotevents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : []
        }
    }

    componentDidMount() {
        let url = "http://unn-w18011022.newnumyspace.co.uk/Y3/toonSpace/api/events"

        if (this.props.eventid !== undefined) {
            url += "?id=" + this.props.eventid
        } else if (this.props.randomEvent) {
            url += "?id=random"
        }


        fetch(url)
            .then( (response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then( (data) => {
                this.setState({results:data.results})
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
            });
    }

    filterSearch = (s) => {
        return s.title.toLowerCase().includes(this.props.search.toLowerCase())
    }





    render() {
        let noData = ""
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }

        return (
            <div>
                {noData}
                {this.state.results.map( (event, i) => (<ChatbotEvent key={i} event={event}/>) )}
            </div>
        )
    }
}

export default Chatbotevents;