import React from "react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

class chatbotDisplay extends React.Component {

    render(){


        return(

            <div id="ChatBotDiv">
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
            </div>

        )
    }
}

export default chatbotDisplay;
