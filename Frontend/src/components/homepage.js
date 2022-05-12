import React from "react";
import Events from "./Kristian/events";


class HomePage extends React.Component {

    render(){
        return(
            <div>
                <h1>Welcome to ToonSpace!</h1>
                <h2>Spotlight event:</h2><Events randomEvent={true}/>
            </div>
        )
    }
}

export default HomePage;