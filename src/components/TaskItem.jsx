import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import expandIcon from '../assets/icons/UI/expand.png';
import collapseIcon from '../assets/icons/UI/collapse.png';
import dateActiveIcon from '../assets/icons/UI/task-date-active.png';
import dateInactiveIcon from '../assets/icons/UI/task-date-inactive.png';
import editActiveIcon from '../assets/icons/UI/task-edit-active.png';
import editInactiveIcon from '../assets/icons/UI/task-edit-inactive.png';
import TaskDelete from "./UI/TaskDelete";

function TaskItem({ task }) {
    const [isDone, setIsDone] = useState(task.isDone);
    const [isExpanded, setIsExpanded] = useState(false);

    function handleOnCheck() {
        setIsDone(!isDone);
        // others
    }

    return (
        <div className="flex py-[15px] border-b-2 border-solid border-primary-grey">
            <div className="flex flex-row flex-grow gap-[20px]">
                <Checkbox isChecked={isDone} onChange={handleOnCheck} />
                <div className="flex flex-col flex-grow gap-[15px]">
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
                    <div className="flex items-center gap-[15px]">
                        <img
                            src={isExpanded ? dateInactiveIcon : dateActiveIcon}
                            alt="date-icon"
                            className="h-[auto] w-[20px]"
                        />
                        <input type="date" className="text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey py-[8px] px-[12px] min-w-[200px]"></input>
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <img
                            src={isExpanded ? editInactiveIcon : editActiveIcon}
                            alt="edit-icon"
                            className="w-[20px]"
                        />
                        <textarea type="text" className="flex-grow text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey min-w-[200px]"></textarea>
                    </div>
                    {/* <div className="text-primary-dark-grey">{task.description}</div> */}
                    <div className="text-primary-dark-grey">{task.description}</div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;