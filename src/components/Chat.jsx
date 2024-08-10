import SearchBar from "./UI/SearchBar";

// import personLogo from "../assets/icons/UI/person.png"
// import personDarkLogo from "../assets/icons/UI/person-dark.png"
import ChatSummary from "./UI/ChatSummary";
import dummyChat from "../dummy/chat";

function Chat() {
    const chat = dummyChat
    return (
        <>
            <SearchBar />
            <div className="overflow-y-auto">
                <ChatSummary chatSummary={chat}/>
            </div>
        </>
    )
}

export default Chat;