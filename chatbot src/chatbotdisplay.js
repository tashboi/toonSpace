import config from '../bot/config.js';
import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider.js';

const MyComponent = () => {
    return (    <div>
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    </div>
    );};