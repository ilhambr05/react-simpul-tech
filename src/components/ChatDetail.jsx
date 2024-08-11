import arrowLeft from '../assets/icons/UI/arrow-back.png';
import closeIcon from '../assets/icons/UI/close-dark.png';
import dummyChatSummary from "../dummy/chat";
import dummyChatDetail from "../dummy/chatDetail1";
import Button from './UI/Button';
import ChatBubble from './UI/ChatBubble';
import ChatDivider from './UI/chatDivider';
import TypeBar from './UI/TypeBar';

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

function myfunction(value, parentRef) {
    const item = value.getBoundingClientRect();
    return (
        item.top >= 0 &&
        item.left >= 0 &&
        item.bottom <= (
            window.innerHeight ||
            document.documentElement.clientHeight) &&
        item.right <= (
            window.innerWidth ||
            document.documentElement.clientWidth)
    );
}

function ChatDetail({ chatID, setChatDetailId }) {
    const chat = dummyChatSummary.find((chat) => chat.id === chatID);
    const participantNumber = chat?.participants.length || 0;
    const participantsData = generateParticipantsColorData(chat.participants);

    console.log(participantsData);
    return (
        <>
            <div className='flex flex-row gap-[20px] -mx-[32px] px-[32px] pb-[24px] border-b-2 border-solid border-b-primary-light-grey'>
                {/* header */}
                <div className="flex items-center justify-center cursor-pointer" onClick={() => setChatDetailId(0)}>
                    <img src={arrowLeft} alt="back" />
                </div>
                <div className='flex-grow'>
                    <div className='text-[16px] font-bold text-primary-blue'>{chat?.content?.title || "title"}</div>
                    <div className='text-[14px]'>{`${participantNumber} Participant${participantNumber > 1 ? "s" : ""}`}</div>
                </div>
                <div className="flex items-center justify-center cursor-pointer" onClick={() => setChatDetailId(0)}>
                    <img src={closeIcon} alt="close" />
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col-reverse justify-items-end flex-grow gap-[8px] overflow-y-auto py-[15px]" onScroll={() => { }}>
                {
                    dummyChatDetail.map((chat, index) => {
                        return (
                            <ChatBubble key={`${index}-${chat.id}`} chatData={chat} participantsData={participantsData}>{chat.content}</ChatBubble>
                        )
                    })
                }
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
                <ChatDivider>Today, 01 January 2024</ChatDivider>
                <ChatDivider variant="red">New Message</ChatDivider>
            </div>

            {/* footer */}
            <div className="flex flex-row gap-[15px]" >
                <TypeBar placeholder="Type a message..." />
                <Button>Send</Button>
            </div>
        </>
    )
}

export default ChatDetail;