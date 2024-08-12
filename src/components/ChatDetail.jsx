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

function checkVisibility(elementRef, parentNode) {
    // console.log(elementRef.current)
    const el = elementRef.current.getBoundingClientRect();
    // const parentNode = parentRef.current;

    console.log({ parentTop: parentNode, elTop: el.top, elBottom: el.bottom });
    // return (
    //     el.top >= 0 &&
    //     el.bottom <= (
    //         parentNode.innerHeight
    //         // || document.documentElement.clientHeight
    //     )
    // );
}

function ChatDetail({ chatID, setChatDetailId }) {
    const chatSummary = dummyChatSummary.find((chat) => chat.id === chatID);
    const participantNumber = chatSummary?.participants.length || 0;
    const participantsData = generateParticipantsColorData(chatSummary.participants);
    let isNewMessageNotifDisplayed = false;

    const [chatDetail, setChatDetail] = useState(dummyChatDetail);
    const [isConnecting, setIsConnecting] = useState(true);

    useEffect(() => {
        setIsConnecting(true);
        setTimeout(() => {
            setIsConnecting(false);

        }, 1000);
    }, []);

    let chatDateDivider = new Date(chatDetail.messages[0].timestamp).toDateString();
    let chatLastSeenTimestamp = chatDetail.timestampUserLastSeenChat;

    // const chatContainerRef = useRef();
    const newMessagesNotifRef = useRef();

    function checkNotifVisible(event) {
        // console.log(newMessagesNotifRef)
        // console.log(checkVisibility(newMessagesNotifRef, event?.target));
        // console.log("scrolled")
    }

    // chatDetail.messages.forEach((item, index) => {
    //     const date = new Date(`${item.date} ${item.time}`);
    //     item.timestamp = date.getTime();
    // });

    // console.log(JSON.stringify(chatDetail.messages))

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
            <div className="flex flex-col-reverse justify-items-end flex-grow gap-[8px] overflow-y-auto py-[15px]" onScroll={checkNotifVisible}>
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
                            // console.log("seen", chat.messageID);
                            if(!isNewMessageNotifDisplayed){
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
                <ChatDivider>{chatDateDivider}</ChatDivider>
                {/* <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content2</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content2</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content</ChatBubble>
                <ChatBubble>chat?.content?.content2</ChatBubble> */}
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