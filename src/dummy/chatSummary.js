import personLogo from "../assets/icons/UI/person.png"
import personDarkLogo from "../assets/icons/UI/person-dark.png"
import chatDetail1 from "./chatDetail1";
import chatDetail2 from "./chatDetail2";
import chatDetail3 from "./chatDetail3";
import chatSupport from "./chatSupport";

const chatSummary = [
    {
        id: 999,
        type: "support",
        participants: [
            {
                userID: 0,
                name: "FastVisa Support",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
        ],
        content: {
            title: "fastVisa Support",
            sender: chatSupport?.messages[0]?.senderName,
            hasNewMessage: true,
            message: chatSupport?.messages[0]?.content,
            dateTime: `${chatSupport?.messages[0]?.date} ${chatSupport?.messages[0]?.time}`
        }
    },
    {
        id: 1,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
            {
                userID: 111,
                name: "Ilham",
                icon: personLogo,
                styleClass: "bg-indicator-orange",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: chatDetail1?.messages[0]?.senderName,
            hasNewMessage: chatDetail1.timestampUserLastSeenChat < chatDetail1?.messages[0]?.timestamp,
            message: chatDetail1?.messages[0]?.content,
            dateTime: `${chatDetail1?.messages[0]?.date} ${chatDetail1?.messages[0]?.time}`
        }
    },
    {
        id: 2,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
            {
                userID: 111,
                name: "Ilham",
                icon: personLogo,
                styleClass: "bg-indicator-orange",
            },
        ],
        content: {
            title: "Catching Up",
            sender: chatDetail2?.messages[0]?.senderName,
            hasNewMessage: chatDetail2.timestampUserLastSeenChat < chatDetail2?.messages[0]?.timestamp,
            message: chatDetail2?.messages[0]?.content,
            dateTime: `${chatDetail2?.messages[0]?.date} ${chatDetail2?.messages[0]?.time}`
        }
    },
    {
        id: 3,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 111,
                name: "Ilham",
                icon: personLogo,
                styleClass: "bg-indicator-orange",
            },
        ],
        content: {
            title: "Next Project ?",
            sender: chatDetail3?.messages[0]?.senderName,
            hasNewMessage: chatDetail3.timestampUserLastSeenChat < chatDetail3?.messages[0]?.timestamp,
            message: chatDetail3?.messages[0]?.content,
            dateTime: `${chatDetail3?.messages[0]?.date} ${chatDetail3?.messages[0]?.time}`
        }
    },
    {
        id: 4,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: "sender",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?",
            dateTime: "01/01/2024 12:12"
        }
    },
    {
        id: 5,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: "sender",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?",
            dateTime: "01/01/2024 12:12"
        }
    },
    {
        id: 6,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: "sender",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?",
            dateTime: "01/01/2024 12:12"
        }
    },
    {
        id: 7,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: "sender",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?",
            dateTime: "01/01/2024 12:12"
        }
    },
    {
        id: 8,
        type: "conversation",
        participants: [
            {
                userID: 1,
                name: "John Doe",
                icon: personLogo,
                styleClass: "bg-primary-blue",
            },
            {
                userID: 2,
                name: "Jane Smith",
                icon: personDarkLogo,
                styleClass: "bg-primary-light-grey",
            },
        ],
        content: {
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur",
            sender: "sender",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?",
            dateTime: "01/01/2024 12:12"
        }
    },
];

export default chatSummary;