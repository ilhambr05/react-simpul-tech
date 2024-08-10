function ChatSummary({ chatSummary }) {
    return (
        <>
            {
                chatSummary.map((summary, index) => {
                    return (
                        <div key={index} className="flex flex-row py-[22px] gap-[20px] text-[14px] border-b-primary-dark border-b-[1px] border-solid 
                            last:border-none cursor-pointer">
                            <div className="flex flex-row w-[50px]">
                                {
                                    summary.users.map((user, index) => {
                                        return (
                                            <div key={user.name + index} className="w-[15px] overflow-visible" title={user.name}>
                                                <div className={`flex items-center justify-center h-[30px] w-[30px] rounded-full bg-primary-light-grey ${user.styleClass}`}>
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
                                    {summary.content.sender}
                                </div>
                                <div className="grid">
                                    <div className="truncate">
                                        {summary.content.message}
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-[145px]">{summary.content.dateTime}</div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ChatSummary;