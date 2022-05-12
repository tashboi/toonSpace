import React from 'react';
import Chatbotevents from "./Chatbotevents";

/**
 * A Javascript file which is a custom message. The custom message is for displaying a random event
 *
 * @author Thomas Ashby
 */



const RandomEvent = () => {
    return (
        <div className = "react-chatbot-kit-chat-bot-message">
        <Chatbotevents randomEvent={true}  />
        </div>

    );
};

export default RandomEvent;