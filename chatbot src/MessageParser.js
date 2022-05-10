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
        if (lowerCaseMessage.includes("book") && (lowerCaseMessage.includes("one") || lowerCaseMessage.includes("1") )){
            this.actionProvider.handle121booking()
        }

    }
}

export default MessageParser;