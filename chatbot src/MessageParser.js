class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            
        }

        if (lowerCaseMessage.includes("incoming")) {
            this.actionProvider.handleIncomingList();
        }

    }
}

export default MessageParser;