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
        if (lowerCaseMessage.includes("outgoing")) {
            this.actionProvider.handleOutgoingList();
        }
        if (lowerCaseMessage.includes("application")) {
            this.actionProvider.handleApplicationList();
        }
        if (lowerCaseMessage.includes("financ")) {
            this.actionProvider.handleFinancialList();
        }

    }
}

export default MessageParser;