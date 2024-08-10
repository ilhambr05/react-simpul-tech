import arrowLeft from '../assets/icons/UI/arrow-back.png';
import closeIcon from '../assets/icons/UI/close-dark.png';
import dummyChatSummary from "../dummy/chat";
import Button from './UI/Button';
import ChatBuble from './UI/ChatBuble';
import TypeBar from './UI/TypeBar';


function ChatDetail({ chatID, setChatDetailId }) {
    const chat = dummyChatSummary.find((chat) => chat.id === chatID);
    const participantNumber = chat?.users.length || 0;

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
            <div className="flex flex-col-reverse justify-items-end flex-grow gap-[5px] overflow-y-auto py-[15px]">
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content2</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content2</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content</ChatBuble>
                <ChatBuble>chat?.content?.content2</ChatBuble>
            </div>

            {/* footer */}
            <div className="flex flex-row gap-[15px]">
                <TypeBar placeholder="Type a message..." />
                <Button>Send</Button>
            </div>
        </>
    )
}

export default ChatDetail;