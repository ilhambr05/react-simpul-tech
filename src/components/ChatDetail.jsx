import { useEffect, useRef, useState } from 'react';
import arrowLeft from '../assets/icons/UI/arrow-back.png';
import closeIcon from '../assets/icons/UI/close-dark.png';
import dummyChatSummary from "../dummy/chat";
import dummyChatDetail from "../dummy/chatDetail1";
import Button from './UI/Button';
import ChatBubble from './UI/ChatBubble';
import ChatDivider from './UI/chatDivider';
import TypeBar from './UI/TypeBar';
import Connecting from './UI/Connecting';

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

function ChatDetail({ chatID, setChatDetailId }) {
    // console.log("chat detail rendered")
    const chatSummary = dummyChatSummary.find((chat) => chat.id === chatID);
    const participantNumber = chatSummary?.participants.length || 0;
    const participantsData = generateParticipantsColorData(chatSummary.participants);
    let isNewMessageNotifDisplayed = false;

    const [chatDetail, setChatDetail] = useState(dummyChatDetail);
    const [isConnecting, setIsConnecting] = useState(true);
    const [isNewMessageNotifVisible, setIsNewMessageNotifVisible] = useState(undefined);

    useEffect(() => {
        setIsConnecting(true);
        setTimeout(() => {
            setIsConnecting(false);
        }, 1000);
    }, []);

    // chat event onscroll
    useEffect(() => {
        const chatContainerEl = chatContainerRef.current;
        chatContainerEl.addEventListener('scroll', checkNewMessageNotifVisible);
        return () => {
            chatContainerEl.removeEventListener('scroll', checkNewMessageNotifVisible);
        };
    }, []);

    let chatDateDivider = new Date(chatDetail.messages[0].timestamp).toDateString();
    let chatLastSeenTimestamp = chatDetail.timestampUserLastSeenChat;

    const chatContainerRef = useRef();
    const newMessagesNotifRef = useRef();

    function checkNewMessageNotifVisible(event) {
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
                    chatDetail.messages.map((chat, index) => {
                        const newChatDateDivider = new Date(chat.timestamp).toDateString();
                        const isDateChanged = newChatDateDivider !== chatDateDivider;
                        let dateDividerComponent = null;
                        let newMessagesNotifComponent = null;

                        if (isDateChanged) {
                            dateDividerComponent = <ChatDivider key={dateDividerComponent}>{chatDateDivider}</ChatDivider>;
                            chatDateDivider = newChatDateDivider;
                        }
                        if ((chat.timestamp <= chatLastSeenTimestamp)) {
                            if (!isNewMessageNotifDisplayed) {
                                isNewMessageNotifDisplayed = true;
                                newMessagesNotifComponent = <ChatDivider ref={newMessagesNotifRef} variant="red" >New Message</ChatDivider>;
                            }
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
                {chatDetail.messages.length > 0 &&
                    <ChatDivider>{chatDateDivider}</ChatDivider>
                }
            </div>

            {
                isConnecting &&
                <Connecting>Please wait while we connect you with one of our team ...</Connecting>
            }

            {/* footer */}
            <div className="flex flex-row gap-[15px]" >
                <TypeBar placeholder="Type a message..." />
                <Button>Send</Button>
            </div>
        </>
    )
}

export default ChatDetail;