import React from "react";
import {
    createChatBotMessage,
    createCustomMessage,
} from 'react-chatbot-kit';

import HelpOptions from "./HelpOptions/HelpOptions";
import LinkList from "./LinkList/LinkList";

import Booking121 from './CustomMessages/Booking121.js';


const BotName = 'Study Abroad Virtual Helper';
const config = {

    initialMessages: [
        createChatBotMessage(`Hi, I'm ${BotName}! Below are some of the topics i can help with. Either click the option or type your query below to get started. I will do  my best to help! :)`, {
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
        {
            widgetName: "Booking121Form",
            widgetFunc: (props) => <Booking121 {...props} />,

        },
        {
            widgetName: "OutgoingLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Outgoing students link 1",
                        url:
                            "https://www.google.co.uk",
                        id: 1,
                    },
                    {
                        text: "Outgoing students link 2",
                        url:
                            "https://www.google.co.uk",
                        id: 2,
                    },
                    {
                        text: "Outgoing students link 3",
                        url: "https://www.google.co.uk",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "ApplicationHelpLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Application help link 1",
                        url:
                            "https://www.google.co.uk",
                        id: 1,
                    },
                    {
                        text: "Application help link 2",
                        url:
                            "https://www.google.co.uk",
                        id: 2,
                    },
                    {
                        text: "Application help link 3",
                        url: "https://www.google.co.uk",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "FinancialHelpLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Financial help link 1",
                        url:
                            "https://www.google.co.uk",
                        id: 1,
                    },
                    {
                        text: "Financial help link 2",
                        url:
                            "https://www.google.co.uk",
                        id: 2,
                    },
                    {
                        text: "Financial Help link 3",
                        url: "https://www.google.co.uk",
                        id: 3,
                    },
                ],
            },
        },
    ],customMessages: {
       // custom: (props) => <CustomMessage {...props} />,

    }
};

export default config;











/*
*
*
*

const config = {
    botName: botName,
    lang: 'no',
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    initialMessages: [
        createChatBotMessage(
            `Hi I'm ${botName}. I’m here to help you explain how I work.`
        ),
        createChatBotMessage(
            "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
            {
                withAvatar: false,
                delay: 500,
            }
        ),
        createCustomMessage('test', 'custom'),
    ],
    state: {
        gist: '',
        infoBox: '',
    },
    customComponents: {},
    customMessages: {
        custom: (props) => <CustomMessage {...props} />,
        Booking: (props) => <Booking121 {...props} />
    },
    widgets: [],
};

export default config;


*
*
*
*  */