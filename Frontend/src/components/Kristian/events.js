import React from "react";
import Event from "./event";
/**
 * @author Kristian Welsh
 * @author Thomas Ashby
 */


class Events extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results : []
        }
    }


    componentDidMount() {

        let url = "http://unn-w18011022.newnumyspace.co.uk/Y3/toonSpace/backend/api/events"

        if (this.props.filter === "upcoming") {
            url += "?upcoming=true"
        }
        if (this.props.filter === "cheapest") {
            url += "?cheapest=true"
        }


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


    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            let url = "http://unn-w18011022.newnumyspace.co.uk/Y3/toonSpace/api/events"

            if (this.props.filter === "upcoming") {
                url += "?upcoming=true"
            }
            if (this.props.filter === "cheapest") {
                url += "?cheapest=true"
            }


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
    }




    filterSearch = (s) => {
        return s.title.toLowerCase().includes(this.props.search.toLowerCase())
    }



    render() {

        let noData = ""
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }
        let data = this.state.results


        if (this.props.search !== undefined){
            data = data.filter(this.filterSearch)
        }
        console.log(this.props.filter, this.props.search)
        return (

            <div>
                {noData}
                {data.map( (event, i) => (<Event key={i} event={event}/>) )}
            </div>
        )
    }

}

export default Events;