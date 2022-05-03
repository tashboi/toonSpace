import React from "react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import chatbotIMG from "../../img/chatbot.png"

class chatbotDisplay extends React.Component {




    render(){

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