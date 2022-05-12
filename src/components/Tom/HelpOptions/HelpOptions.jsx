import React from "react";
import "./HelpOptions.css";

/**
 * A Javascript file which creates an array called options. Options are then mapped to a button.
 *
 * Functions are also attached to the buttons so once they are clicked they do something
 *
 * @author Thomas Ashby
 */

const HelpOptions = (props) => {


    const options = [
        {
            text: "Incoming Student",
            handler: props.actionProvider.handleIncomingList,
            id: 1,
        },
        {
            text: "Outgoing Student",
            handler: props.actionProvider.handleOutgoingList,
            id: 2 },
        {
            text: "Help with applying",
            handler: props.actionProvider.handleApplicationList,
            id: 3 },
        {
            text: "Financial Help",
            handler: props.actionProvider.handleFinancialList,
            id: 4 },
        {
            text: "Book a 1 to 1 meeting!",
            handler: props.actionProvider.handle121booking,
            id: 5},
        {
            text: "Events for students",
            handler: props.actionProvider.handleShowAllEvents,
            id: 6 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="help-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
    return <div className="help-options-container">{optionsMarkup}</div>;
};

export default HelpOptions;