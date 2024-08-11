import ChatMenuPopper from "./ChatMenuPopper";

function ChatBubble({ chatData, participantsData, children }) {
    const yourUserID = 111;
    const isItYou = chatData?.senderID === yourUserID;
    const chatColor = participantsData[chatData?.senderID]?.textColor;
    const chatBubbleColor = participantsData[chatData?.senderID]?.bubbleColor;

    return (
        <>
            {/* {divider ? <ChatDivider>{divider}</ChatDivider> : ''} */}
            {/* items-end/items-start */}
            <div className={`flex flex-col gap-[5px] text-[14px] ${isItYou ? " items-end" : " items-start"}`}>
                <div className={`font-bold text-chat-green-dark ${chatColor}`}>
                    {isItYou ? "You" : chatData?.senderName}
                </div>
                <div className={`flex ${isItYou ? " flex-row-reverse" : " flex-row"}`}>
                    <div className={`flex flex-col items-end gap-[4px] rounded-[5px] ${chatBubbleColor} px-[12px] py-[10px]`}>
                        {children}
                        <div className="flex self-start text-[12px]">{chatData?.time}</div>
                    </div>

                    <ChatMenuPopper />
                </div>
            </div>
        </>
    );
}

export default ChatBubble;