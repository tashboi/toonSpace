/**
 * A Javascript file which reads the users inputed messages and
 * preforms different functions depending on the text
 *
 * The file passes the variable message. The message then gets checked if it contains key words.
 * If the message contains a keyword which is defiened. It will then proceed to call the functions from action provider.
 *
 * Experimented with using arrays of values. An example being greetings. If an array contains the parsed message, it will then trigger a function.
 * This allows for not having to rewrite code for every possible greeting.
 *
 * @author Thomas Ashby
 */


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