class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const greetings = ["hi", "hello", "hey"];

        const lowerCaseMessage = message.toLowerCase();

        if (greetings.includes(lowerCaseMessage)) {
            this.actionProvider.handleGreetings()
        }
       else if (lowerCaseMessage.includes("incoming")) {
            this.actionProvider.handleIncomingList();
        }
        else if (lowerCaseMessage.includes("outgoing")) {
            this.actionProvider.handleOutgoingList();
        }
        else if (lowerCaseMessage.includes("application")) {
            this.actionProvider.handleApplicationList();
        }
        else if (lowerCaseMessage.includes("financ")) {
            this.actionProvider.handleFinancialList();
        }
        else if (lowerCaseMessage.includes("book") && (lowerCaseMessage.includes("one") || lowerCaseMessage.includes("1") )){
            this.actionProvider.handle121booking()
        }
        else if (lowerCaseMessage.includes("random") && (lowerCaseMessage.includes("event"))){
            this.actionProvider.handleRandomEvent()
        }
        else if (lowerCaseMessage.includes("enquiry")){
            this.actionProvider.handleEnquiryForm()
        }
        else if (lowerCaseMessage.includes("event") && (lowerCaseMessage.includes("all") || (lowerCaseMessage.includes("every")))){
            this.actionProvider.handleShowAllEvents()
        }
        else{
            this.actionProvider.handleUnrecognizedMessage();
        }

    }
}

export default MessageParser;