import SearchBar from "./UI/SearchBar";

import personLogo from "../assets/icons/UI/person.png"
import personDarkLogo from "../assets/icons/UI/person-dark.png"

function Chat() {
    const users = [
        {
            name: "user 1",
            icon: personLogo,
            styleClass: "!bg-primary-blue",
        },
        {
            name: "user 2",
            icon: personDarkLogo,
            styleClass: "!bg-primary-light-grey",
        },
    ]
    return (
        <>
            <SearchBar />
            <div className="h-[calc(100%-37.5px)]">
                <div className="flex flex-row py-[22px] gap-[20px] text-[14px]">
                    <div className="flex flex-row w-[50px]">
                        {
                            users.map((user, index) => {
                                return (
                                    <div key={user.name + index} className="w-[15px] overflow-visible">
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur
                        </div>
                        <div className="font-bold">
                            sender :
                        </div>
                        <div className="grid">
                            <div className="truncate">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est enim facilis rem similique consectetur aliquam perferendis quam alias ipsam earum dolorem qui officia ipsum in veniam culpa excepturi libero?
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[145px]">01/01/2024 12:12</div>
                </div>
            </div>
        </>
    )
}

export default Chat;