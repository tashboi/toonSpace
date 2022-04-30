import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HelpOptions from "./components/HelpOptions/HelpOptions";
import LinkList from "./components/LinkList/LinkList";
const BotName = 'Study Abroad Virtual Helper';
const config = {



    initialMessages: [
        createChatBotMessage(`Hi, I'm ${BotName}! Here are some topics i can help with`, {
            widget: "HelpOptions",

        }),
    ],
    botName: BotName,
    widgets: [
        {
            widgetName: "HelpOptions",
            widgetFunc: (props) => <HelpOptions {...props} />,
        },
        {
            widgetName: "IncomingLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Incoming students link 1",
                        url:
                            "https://www.google.co.uk",
                        id: 1,
                    },
                    {
                        text: "Incoming students link 2",
                        url:
                            "https://www.google.co.uk",
                        id: 2,
                    },
                    {
                        text: "Incoming students link 3",
                        url: "https://www.google.co.uk",
                        id: 3,
                    },
                ],
            },
        },
    ],
};

export default config;