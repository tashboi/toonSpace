import React from "react";
import ChatbotEvent from "./chatbotEvent";


/**
 * A Javascript file which gets the information from the api so it can display all the events.
 * It calls the ChatbotEvent file to display all singular events.
 *
 *
 * It maps the response from the url and passes the information as props into each <ChatbotEvent>.
 *
 * Buttons are also defiened and used to help with pagination
 *
 * If the props such as eventid or randomEvent are supplied, the url will change to recieve different information
 *
 * @author Thomas Ashby
 */


class Chatbotevents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : []
        }

    }

    componentDidMount() {
        let url = "http://unn-w18011022.newnumyspace.co.uk/Y3/toonSpace/backend/api/events"

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


    render() {
        let noResults = ""

        let results = this.state.results

        if (this.state.results.length === 0) {
            noResults = <p>Information couldnt be loaded!</p>
        }

        let buttons = ""


        if (this.props.page !== undefined) {
            const pageSize = 2
            let pageMax = this.props.page * pageSize
            let pageMin = pageMax - pageSize

            let finalPage =  Math.ceil(results.length / pageSize)


            buttons = (
                <div>
                    <p>Page:{this.props.page} of {finalPage}</p>
                    <button onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
                    <button onClick={this.props.handleNextClick} disabled={this.props.page >= finalPage} >Next</button>
                </div>
            )
            results = results.slice(pageMin,pageMax)

        }


        return (
            <div>
                {noResults}
                {results.map( (event, i) => (<ChatbotEvent key={i} event={event}/>) )}
                {buttons}
            </div>
        )
    }
}

export default Chatbotevents;