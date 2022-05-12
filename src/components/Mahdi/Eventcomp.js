import React from "react";


class Eventcomp extends React.Component {

    render() {
        return(
            
            <div className = "events-container">

                <p class= "heading">name of the event:</p>
                <p class= "name">{this.props.event.title}</p>

                <p class= "heading">whats the event about? :</p>
                <p>{this.props.event.description}</p>

                <p class= "heading">who is holding the event?</p>
                <p>{this.props.event.producer}</p>

                <p class= "heading">The type of event:</p>
                <p>{this.props.event.category}</p>
            </div>
        )
           
 
        
    }
}

export default Eventcomp;