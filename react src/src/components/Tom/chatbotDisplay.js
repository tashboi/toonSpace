import React from "react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import chatbotIMG from "../../img/chatbot.png"

class chatbotDisplay extends React.Component {


    handleClick = () => {
        var div = document.getElementById("ChatBotDiv");
        var img =document.getElementById("ChatbotImg");

        if (div.style.display !== "block") {
            div.style.display = "block";
            img.style.display = "none";
        }
        else {
            div.style.display = "none";
            img.style.display = "block";
        }
    }

    render(){
       // const [show,setShow]=React.useState(true)
        return(
            <div id="ChatbotPosition">
                <img id="ChatbotImg" src={chatbotIMG} className="chatbot" alt="Chatbot Logo" onClick={this.handleClick} />
                <div id="ChatBotDiv" onClick={this.handleClick}>
                    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </div>
            </div>



        )
    }
}

export default chatbotDisplay;