function ChatBuble({ children }) {
    return (
        <div className="flex flex-col items-end gap-[8px]">
            <div className="font-bold text-[14px] text-primary-blue">You</div>
            <div className="flex flex-col items-end gap-[4px] rounded-[5px] bg-primary-light-grey px-[12px] py-[10px]">
                {children}
            </div>
        </div>
    );
}

export default ChatBuble;