
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
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

    handleEnquiryForm = () => {
        const message = this.createChatBotMessage("Below is the Enquiry Form");
        const message2 = this.createCustomMessage("Enquiry Form","EnquiryForm")

        this.updateChatbotState(message);
        this.updateChatbotState(message2);
    };

    handleRandomEvent = () => {
        const message = this.createCustomMessage("A random Event","RandomEvent")
        const message2 = this.createChatBotMessage(
            "Here is a random event. You can click it to see more details about the event"
        );
        this.updateChatbotState(message2);
        this.updateChatbotState(message);
    };
    handleShowAllEvents = () => {
        const message = this.createCustomMessage("List of events","AllEvents")
        const message2 = this.createChatBotMessage(
            "Here is a list of all the events. You can click an event to see more about the event!"
        );
        this.updateChatbotState(message2);
        this.updateChatbotState(message);
    };


    handleUnrecognizedMessage = () =>{
        const message = this.createChatBotMessage(
            "Sorry, I do not understand your message, Please can you rewrite it?"
        );
        this.updateChatbotState(message);

    }

    handleGreetings = () => {
        const greetings = ["hi", "hello", "hey"];
        const randomGreeting = Math.floor(Math.random() * greetings.length);
        const message = this.createChatBotMessage(
            greetings[randomGreeting]
        );
        this.updateChatbotState(message);
    }







    updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;