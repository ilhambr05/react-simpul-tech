import ChatSummary from "./ChatSummary";
import dummyChatSummary from "../dummy/chat";
import { useState } from "react";
import ChatDetail from "./ChatDetail";

function Chat() {
    const chatSummary = dummyChatSummary;
    const [chatDetailId, setChatDetailId] = useState(0);

    return (
        <>
            {chatDetailId
                ? <ChatDetail chatID={chatDetailId} setChatDetailId={setChatDetailId} />
                : <ChatSummary chatSummary={chatSummary} setChatDetailId={setChatDetailId} />
            }
        </>
    )
}

export default Chat;