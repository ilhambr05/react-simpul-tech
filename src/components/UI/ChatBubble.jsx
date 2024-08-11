function ChatBubble({ chatData, children }) {
    const yourUserID = 111;

    const isItYou = chatData?.senderID === yourUserID;

    return (
        <>
        {/* items-end/items-start */}
            <div className={`flex flex-col gap-[5px] text-[14px] ${isItYou ? " items-end" : " items-start"}`}>
                <div className="font-bold text-primary-blue">{isItYou ? "You" : chatData?.senderName}</div>
                <div className="flex flex-col items-end gap-[4px] rounded-[5px] bg-primary-light-grey px-[12px] py-[10px]">
                    {children}
                    <div className="flex self-start text-[12px]">{chatData?.time}</div>
                </div>
            </div>
        </>
    );
}

export default ChatBubble;