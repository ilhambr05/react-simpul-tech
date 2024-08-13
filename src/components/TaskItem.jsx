import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import expandIcon from '../assets/icons/UI/expand.png';
import collapseIcon from '../assets/icons/UI/collapse.png';
import TaskDelete from "./UI/TaskDelete";

function TaskItem({ task }) {
    const [isDone, setIsDone] = useState(task.isDone);
    const [isExpanded, setIsExpanded] = useState(false);

    function handleOnCheck() {
        setIsDone(!isDone);
    }

    return (
        <div className="flex py-[15px] border-b-2 border-solid border-primary-grey">
            <div className="flex flex-row flex-grow gap-[20px]">
                <Checkbox isChecked={isDone} onChange={handleOnCheck} />
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-row gap-[15px]">
                        <div className={`flex-grow font-bold text-primary-dark-grey text-[16px] ${isDone ? "line-through text-primary-grey" : ""}`}>{task.title}</div>
                        <div className="text-indicator-red text-[14px]">10 Days Left</div>
                        <div className="text-primary-dark-grey text-[14px]">{task.dueTime}</div>
                        <div className="flex flex-row gap-[5px]">

                        <div className="flex justify-center cursor-pointer p-[5px] min-w-[20px]"
                            onClick={() => { setIsExpanded(!isExpanded) }}>
                            <img
                                src={isExpanded ? collapseIcon : expandIcon}
                                alt="collapse/expand"
                                className="w-[11px] h-[8px] mt-[2px]"
                            />
                        </div>
                        <TaskDelete />
                        </div>
                    </div>
                    <div className="text-primary-dark-grey">{task.description}</div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;