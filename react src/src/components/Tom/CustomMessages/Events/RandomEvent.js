import React from 'react';
import Events from "./events";

const RandomEvent = () => {
    return (
        <div className = "react-chatbot-kit-chat-bot-message">
        <Events randomEvent={true}  />
        </div>

    );
};

export default RandomEvent;