import React from "react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

class chatbotDisplay extends React.Component {
    /**
     * A Javascript file which displays the chatbot. It uses the "react-chatbot-kit" to call <Chatbot>
     * Then the config file, actionProvier and MessageParse are called as these 3 files are required for the
     * chatbot to work
     * @author Thomas Ashby
     */
    render(){


        return(

            <div id="ChatBotDiv">
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
            </div>

        )
    }
}

export default chatbotDisplay;
