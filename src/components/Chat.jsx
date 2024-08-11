import ChatSummary from "./ChatSummary";
import { useState } from "react";
import ChatDetail from "./ChatDetail";

function Chat() {
    const [chatDetailId, setChatDetailId] = useState(0);

    return (
        <>
            {chatDetailId
                ? <ChatDetail chatID={chatDetailId} setChatDetailId={setChatDetailId} />
                : <ChatSummary setChatDetailId={setChatDetailId} />
            }
        </>
    )
}

export default Chat;