import React from "react";
import {
    createChatBotMessage,
} from 'react-chatbot-kit';

import HelpOptions from "./HelpOptions/HelpOptions";
import LinkList from "./LinkList/LinkList";
import Booking121 from './CustomMessages/Booking121/Booking121.js';
import RandomEvent from "./CustomMessages/Events/RandomEvent";
import AllEvents from "./CustomMessages/Events/AllEvents";
import EnquiryForm from "./CustomMessages/Equirys/EnquiryForm";


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
                        text: "Life im Newcastle",
                        url:
                            "https://www.northumbria.ac.uk/study-at-northumbria/visit-northumbria/life-in-newcastle/",
                        id: 1,
                    },
                    {
                        text: "Useful Information",
                        url:
                            "https://www.northumbria.ac.uk/international/incoming-students/useful-information",
                        id: 2,
                    },
                    {
                        text: "Accomodation in Newcastle",
                        url: "https://www.northumbria.ac.uk/study-at-northumbria/accommodation/",
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
                        text: "Where can you study?",
                        url:
                            "https://nu.moveon4.com/publisher/3/eng#",
                        id: 1,
                    },
                    {
                        text: "How to apply ",
                        url:
                            "https://www.northumbria.ac.uk/international/study-abroad-exchange-and-erasmus/non-erasmus/how-to-apply/",
                        id: 2,
                    },
                    {
                        text: "Study abroad process",
                        url: "https://www.northumbria.ac.uk/international/study-abroad-exchange-and-erasmus/study-abroad-processes",
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
                        text: "How to apply!",
                        url:
                            "https://www.northumbria.ac.uk/international/incoming-students/how-to-apply",
                        id: 1,
                    },
                    {
                        text: "Academic Requirments",
                        url:
                            "https://www.northumbria.ac.uk/international/incoming-students/academic-and-english-language-requirements",
                        id: 2,
                    },
                    {
                        text: "Exchange Application Guide",
                        url: "https://northumbria-cdn.azureedge.net/-/media/international/sa-exch-s2-202021/exchange-application-guidelines-202021.pdf?modified=20210310153302",
                        id: 3,
                    },{
                        text: "Student Guidance",
                        url: "https://northumbria-cdn.azureedge.net/-/media/international/incoming-saexch-website-202122/student-guidance-2022.pdf?modified=20220128141256",
                        id: 4,
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
                        text: "Northumbria Financial Help Site",
                        url:
                            "https://www.northumbria.ac.uk/study-at-northumbria/support-for-students/financial-support/",
                        id: 1,
                    },
                    {
                        text: "Funding for EU students",
                        url:
                            "https://www.northumbria.ac.uk/study-at-northumbria/support-for-students/financial-support/funding-for-eu-students/",
                        id: 2,
                    },
                    {
                        text: "Funding for International students",
                        url: "https://www.northumbria.ac.uk/study-at-northumbria/support-for-students/financial-support/funding-for-international-students/",
                        id: 3,
                    },
                ],
            },
        },
    ],customMessages: {
        RandomEvent: (props) => <RandomEvent {...props} />,
        AllEvents:  (props) => <AllEvents {...props} />,
        EnquiryForm: (props) => <EnquiryForm {...props} />
    }
};

export default config;











/*
*
*
*

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