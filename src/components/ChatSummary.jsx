import SearchBar from "./UI/SearchBar";

function ChatSummary({ chatSummary, setChatDetailId }) {
    return (
        <>
            <SearchBar />
            <div className="overflow-y-auto">
                {
                    chatSummary.map((summary, index) => {
                        return (
                            <div key={index} className="flex flex-row py-[22px] text-[14px] border-b-primary-dark border-b-[1px] border-solid 
                            last:border-none cursor-pointer hover:bg-[#D2D2D22B]"
                                onClick={() => setChatDetailId(summary.id)}>
                                <div className="flex flex-row min-w-[50px] overflow-hidden mr-[10px]">
                                    {
                                        summary.users.map((user, index) => {
                                            return (
                                                <div key={user.name + index} className="w-[15px] overflow-visible" title={user.name}>
                                                    <div className={`flex items-center justify-center h-[30px] w-[30px] rounded-full ${user.styleClass || "bg-[#ffffff]"}`}>
                                                        <img className="w-[12px] h-[12px]" src={user.icon}></img>
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
                                <div className="min-w-[145px] ml-[20px]">{summary.content.dateTime}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ChatSummary;