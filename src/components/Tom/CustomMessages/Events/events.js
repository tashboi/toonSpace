import React from "react";
import Event from "./event";

class Events extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : []
        }
    }

    componentDidMount() {
        let url = "http://unn-w18011022.newnumyspace.co.uk/Y3/toonSpace/api/events"

        if (this.props.id !== undefined) {
            url += "?id=" + this.props.id
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







    render() {
        let noData = ""
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }

        return (
            <div>
                {noData}
                {this.state.results.map( (event, i) => (<Event key={i} event={event}/>) )}
            </div>
        )
    }
}

export default Events;