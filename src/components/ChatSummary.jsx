import { useEffect, useState } from "react";
import Loader from "./UI/Loader";
import SearchBar from "./UI/SearchBar";

import personLogo from "../assets/icons/UI/person.png"
import personDarkLogo from "../assets/icons/UI/person-dark.png"

import dummyChatSummary from "../dummy/chatSummary";
import { fetchChatSummary } from "../services/chat";

const userIcons = {
    "personLogo": personLogo,
    "personDarkLogo": personDarkLogo
};

function ChatSummary({ setChatDetailId }) {
    const [chatSummary, setChatSummary] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     setisFetching(true);
    //     setTimeout(() => {
    //         setChatSummary(dummyChatSummary);
    //         setisFetching(false);
    //     }, 500);
    // }, []);

    useEffect(() => {
        async function doFetch() {
            setIsFetching(true);

            try {
                const summary = await fetchChatSummary();
                // console.log(summary);
                setChatSummary(summary);
                setIsFetching(false);
            } catch (error) {
                setError({
                    message:
                        error.message || 'Could not fetch data, please try again later.',
                });
                setIsFetching(false);
            }
        }

        doFetch();
    }, []);

    return (
        <>
            <SearchBar />
            {
                isFetching
                    ? <Loader>Loading Chats ...</Loader>
                    :
                    <div className="overflow-y-auto">
                        {
                            error
                                ? <div>{error.message}</div>
                                :
                                chatSummary.map((summary, index) => {
                                    return (
                                        <div key={index} className="flex flex-row py-[22px] text-[14px] border-b-primary-dark border-b-[1px] border-solid 
                            last:border-none cursor-pointer hover:bg-[#D2D2D22B]"
                                            onClick={() => setChatDetailId(summary.id)}>
                                            <div className="flex flex-row min-w-[50px] overflow-hidden mr-[10px]">
                                                {
                                                    summary.participants.map((user, index) => {
                                                        return (
                                                            <div key={user.name + index} className="w-[15px] overflow-visible" title={user.name}>
                                                                <div className={`flex items-center justify-center h-[30px] w-[30px] rounded-full ${user.styleClass || "bg-[#ffffff]"}`}>
                                                                    <img className="w-[12px] h-[12px]" src={userIcons[user.icon]}></img>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="flex flex-col text-primary-dark-grey">
                                                <div className="text-[16px] font-bold text-primary-blue">
                                                    {summary.content.title}
                                                </div>
                                                <div className="font-bold">
                                                    {summary.content.sender || "Sender"} :
                                                </div>
                                                <div className="grid">
                                                    <div className="truncate">
                                                        {summary.content.message}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="min-w-[145px] ml-[20px] flex flex-col gap-[20px]">
                                                {summary.content.dateTime}
                                                {
                                                    summary.content.hasNewMessage &&
                                                    <div className="rounded-full w-[10px] h-[10px] bg-indicator-red self-center"></div>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
            }
        </>
    );
}

export default ChatSummary;