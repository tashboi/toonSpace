import React from 'react';
import Chatbotevents from "./Chatbotevents";

const RandomEvent = () => {
    return (
        <div className = "react-chatbot-kit-chat-bot-message">
        <Chatbotevents randomEvent={true}  />
        </div>

    );
};

export default RandomEvent;