
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }


    handleFollowUp = () => {
        const message = this.createChatBotMessage(
            "Does this information help you in anyway?",
            {
         delay: 3000,
            }
        );
        this.updateChatbotState(message);
    };

    handleIncomingList = () => {
        const message = this.createChatBotMessage(
            "Ok great! Here is some relevant information for incoming students to Northumbria!",
            {
                widget: "IncomingLinks",
            }
        );
        this.updateChatbotState(message);
        this.handleFollowUp()

    };
    handleOutgoingList = () => {
        const message = this.createChatBotMessage(
            "Ok great! Here is some relevant information for outgoing students from Northumbria!",
            {
                widget: "OutgoingLinks",
            }
        );
        this.updateChatbotState(message);
        this.handleFollowUp()

    };
    handleApplicationList = () => {
        const message = this.createChatBotMessage(
            "Ok great! Here is some relevant information for incoming students to Northumbria!",
            {
                widget: "ApplicationHelpLinks",
            }
        );
        this.updateChatbotState(message);
        this.handleFollowUp()

    };
    handleFinancialList = () => {
        const message = this.createChatBotMessage(
            "Ok great! Here are some relevant information about the finances for study abroad!",
            {
                widget: "FinancialHelpLinks",
            }
        );
        this.updateChatbotState(message);
        this.handleFollowUp()

    };
    handle121booking = () => {
        const message = this.createChatBotMessage(
            "So to book a 1 2 1. Please fill the form below",
            {
                widget: "Booking121Form",
            }
        );
        this.updateChatbotState(message);

    };







    updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;