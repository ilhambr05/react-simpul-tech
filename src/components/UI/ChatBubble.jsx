import ChatMenuPopper from "./ChatMenuPopper";

function ChatBubble({ chatData, participantsData, children }) {
    const yourUserID = 111;
    const isYou = chatData?.senderID === yourUserID;
    const chatColor = participantsData[chatData?.senderID]?.textColor;
    const chatBubbleColor = participantsData[chatData?.senderID]?.bubbleColor;

    return (
        <>
            {/* {divider ? <ChatDivider>{divider}</ChatDivider> : ''} */}
            {/* items-end/items-start */}
            <div className={`flex flex-col gap-[5px] text-[14px] ${isYou ? " items-end" : " items-start"}`}>
                <div className={`font-bold text-chat-green-dark ${chatColor}`}>
                    {isYou ? "You" : chatData?.senderName}
                </div>
                <div className={`flex max-w-[80%] ${isYou ? " flex-row-reverse" : " flex-row"}`}>
                    <div className={`flex flex-col items-end gap-[4px] rounded-[5px] ${chatBubbleColor} px-[12px] py-[10px]`}>
                        {children}
                        <div className="flex self-start text-[12px]">{chatData?.time}</div>
                    </div>

                    <ChatMenuPopper isYou={isYou}/>
                </div>
            </div>
        </>
    );
}

export default ChatBubble;