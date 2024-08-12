import { useEffect, useRef, useState } from 'react';
import arrowLeft from '../assets/icons/UI/arrow-back.png';
import closeIcon from '../assets/icons/UI/close-dark.png';
import dummyChatSummary from "../dummy/chatSummary";
import dummyChatDetail1 from "../dummy/chatDetail1";
import dummyChatDetail2 from "../dummy/chatDetail2";
import dummyChatDetail3 from "../dummy/chatDetail3";
import dummyChatSupport from "../dummy/chatSupport";
import Button from './UI/Button';
import ChatBubble from './UI/ChatBubble';
import ChatDivider from './UI/chatDivider';
import TypeBar from './UI/TypeBar';
import Connecting from './UI/Connecting';
import { getDateTime } from '../utils/date';
import chatSupport from '../dummy/chatSupport';

function generateParticipantsColorData(participants) {
    let generatedParticipantsData = {};
    const yourUserID = 111;

    // purple is reserved for you
    const textColors = [
        'text-chat-yellow-darker',
        'text-chat-green-darker',
    ]
    const bubbleColors = [
        'bg-chat-yellow',
        'bg-chat-green',
    ]

    participants.forEach((user, index) => {
        const isItYou = user.userID === yourUserID;

        user['textColor'] = isItYou ? "text-chat-purple-darker" : textColors[index];
        user['bubbleColor'] = isItYou ? "bg-chat-purple" : bubbleColors[index];
        generatedParticipantsData[user.userID] = user;
    });

    return generatedParticipantsData;
}

const dummyChatDetailIndexes = {
    999: dummyChatSupport,
    1: dummyChatDetail1,
    2: dummyChatDetail2,
    3: dummyChatDetail3,
}

function ChatDetail({ chatID, setChatDetailId }) {
    const chatSummary = dummyChatSummary.find((chat) => chat.id === chatID);
    const participantNumber = chatSummary?.participants.length || 0;
    const chatType = chatSummary?.type;
    const participantsData = generateParticipantsColorData(chatSummary.participants);
    let isNewMessageNotifDisplayed = false;

    const [chatDetail, setChatDetail] = useState([]);
    const [isConnecting, setIsConnecting] = useState(true);
    const [isNewMessageNotifVisible, setIsNewMessageNotifVisible] = useState(undefined);
    const [newMessage, setNewMessage] = useState("");

    const chatContainerRef = useRef();
    const newMessagesNotifRef = useRef();
    const newMessagesTextRef = useRef();

    let chatDateDivider = chatDetail.length ? new Date(chatDetail?.messages[0]?.timestamp).toDateString() : null;
    let chatLastSeenTimestamp = chatDetail.timestampUserLastSeenChat;

    useEffect(() => {
        setChatDetail(dummyChatDetailIndexes[chatID] || dummyChatDetail1);
        setIsConnecting(true);
        newMessagesTextRef.current.focus();

        // mock loading/fetching
        setTimeout(() => {
            setIsConnecting(false);
        }, 1000);
    }, [chatID]);

    // event handlers
    useEffect(() => {
        const chatContainerEl = chatContainerRef.current;
        const newMessageInput = newMessagesTextRef.current;

        chatContainerEl.addEventListener('scroll', checkNewMessageNotifVisible);
        newMessageInput.addEventListener('change', changeNewMessage);
        return () => {
            chatContainerEl.removeEventListener('scroll', checkNewMessageNotifVisible);
            newMessageInput.removeEventListener('change', changeNewMessage);
        };
    }, []);

    function changeNewMessage(event) {
        setNewMessage(event.target.value);
    }

    function checkNewMessageNotifVisible(event) {
        if(!newMessagesNotifRef?.current){
            return;
        }
        const chatContainerEl = event.target;
        let hiddenViewport = chatContainerEl.scrollHeight - chatContainerEl.clientHeight - chatContainerEl.getBoundingClientRect().top;
        let newMessagesNotifRefTop = newMessagesNotifRef?.current.getBoundingClientRect().top;
        let newMessagesNotifRefScrollTop = newMessagesNotifRefTop + hiddenViewport;

        const scrollToHideNewMessageNotif = chatContainerEl.scrollHeight - newMessagesNotifRefScrollTop;

        setIsNewMessageNotifVisible(scrollToHideNewMessageNotif > 0);
    }

    function scrollToNewMessage() {
        // TODO ?
    }

    function sendNewChat(event) {
        event.preventDefault();
        const inputEl = newMessagesTextRef.current;

        if (!inputEl.value) {
            inputEl.focus();
            return;
        } else {
            // generate new chat
            setChatDetail((prevChatDetail) => {
                const chatMsg = newMessage;
                const timestampNow = new Date().getTime();
                const timeNow = getDateTime(timestampNow)?.formattedTime;

                return {
                    ...prevChatDetail,
                    timestampUserLastSeenChat: timestampNow,
                    messages: [
                        {
                            messageID: prevChatDetail.messages.length + 1,
                            content: chatMsg,
                            timestamp: timestampNow,
                            senderID: 111,
                            senderName: "Ilham",
                            time: timeNow,
                        },
                        ...prevChatDetail.messages
                    ],
                };
            });

            inputEl.focus();
        }

        // clear input
        inputEl.value = "";
    }

    return (
        <>
            <div className='flex flex-row gap-[20px] -mx-[32px] px-[32px] pb-[24px] border-b-2 border-solid border-b-primary-light-grey'>
                {/* header */}
                <div className="flex items-center justify-center cursor-pointer" onClick={() => setChatDetailId(0)}>
                    <img src={arrowLeft} alt="back" />
                </div>
                <div className='flex-grow'>
                    <div className='text-[16px] font-bold text-primary-blue'>{chatSummary?.content?.title || "title"}</div>
                    <div className='text-[14px]'>{`${participantNumber} Participant${participantNumber > 1 ? "s" : ""}`}</div>
                </div>
                <div className="flex items-center justify-center cursor-pointer" onClick={() => setChatDetailId(0)}>
                    <img src={closeIcon} alt="close" />
                </div>
            </div>

            {/* content */}
            <div ref={chatContainerRef} className="flex flex-col-reverse justify-items-end flex-grow gap-[8px] overflow-y-auto py-[15px]">
                {
                    (!isNewMessageNotifVisible && isNewMessageNotifVisible !== undefined) &&
                    <div className='flex justify-center absolute w-full left-0'>
                        <div className='px-[12px] py-[8px] rounded-[5px] bg-stickers-light-blue text-primary-blue font-bold cursor-pointer' onClick={scrollToNewMessage}>New Message</div>
                    </div>
                }
                {/* <ChatDivider ref={newMessagesNotifRef} variant="red" >New Message</ChatDivider> */}
                {/* <ChatDivider>Today, 01 January 2024</ChatDivider> */}
                {
                    chatDetail?.messages?.map((chat, index) => {
                        const yourUserID = 111;
                        // last message = first index
                        const isLastMessageCreatedByYou = chat.senderID === yourUserID && index === 0;
                        // console.log({ isLastMessageCreatedByYou })

                        const newChatDateDivider = new Date(chat.timestamp).toDateString();
                        const isDateChanged = newChatDateDivider !== chatDateDivider;
                        let dateDividerComponent = null;
                        let newMessagesNotifComponent = null;

                        if (isDateChanged) {
                            // give date divider
                            dateDividerComponent = chatDateDivider ? <ChatDivider key={dateDividerComponent}>{chatDateDivider}</ChatDivider> : null;
                            chatDateDivider = newChatDateDivider;
                        }
                        if (chat.timestamp <= chatLastSeenTimestamp && isLastMessageCreatedByYou) {
                            // skip new message notif
                            isNewMessageNotifDisplayed = true;
                        }
                        if (chat.timestamp < chatLastSeenTimestamp && !isNewMessageNotifDisplayed) {
                            // handle new message notif divider
                            isNewMessageNotifDisplayed = true;
                            newMessagesNotifComponent = <ChatDivider ref={newMessagesNotifRef} variant="red" >New Message</ChatDivider>;
                        }
                        return (
                            <div key={index}>
                                <ChatBubble key={`${index}-${chat.id}`} chatData={chat} participantsData={participantsData}>{chat.content}</ChatBubble>
                                {newMessagesNotifComponent}
                                {dateDividerComponent}
                            </div>
                        );
                    })
                }
                {/* first message date */}
                {chatDetail?.messages?.length > 0 &&
                    <ChatDivider>{chatDateDivider}</ChatDivider>
                }
            </div>

            {
                (isConnecting && chatType === "support") &&
                <Connecting>Please wait while we connect you with one of our team ...</Connecting>
            }

            {/* footer */}
            <form onSubmit={sendNewChat} className="flex flex-row gap-[15px]" >
                <TypeBar ref={newMessagesTextRef} placeholder="Type a message..." />
                <Button type="submit">Send</Button>
            </form>
        </>
    )
}

export default ChatDetail;