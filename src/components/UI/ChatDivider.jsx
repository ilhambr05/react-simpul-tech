import { forwardRef } from "react";

const ChatDivider = forwardRef(
    function ChatDivider({ variant, children }, ref) {
        let textColorClass = "text-primary-dark-grey";
        let borderColorClass = "border-primary-dark-grey";

        if (variant === "red") {
            textColorClass = "text-indicator-red";
            borderColorClass = "border-indicator-red";
        }

        return (
            <>
                <div ref={ref} className="flex flex-row gap-1 pt-6 pb-3 items-center">
                    <div className={`flex-grow h-[1px] border-t-2 border-solid ${borderColorClass}`}>
                    </div>
                    <div className={`px-5 font-bold ${textColorClass}`}>
                        {children}
                    </div>
                    <div className={`flex-grow h-[1px] border-t-2 border-solid ${borderColorClass}`}>
                    </div>
                </div>
            </>
        )
    }
)

export default ChatDivider;