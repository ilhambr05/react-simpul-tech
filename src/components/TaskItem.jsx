import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import expandIcon from '../assets/icons/UI/expand.png';
import collapseIcon from '../assets/icons/UI/collapse.png';
import dateActiveIcon from '../assets/icons/UI/task-date-active.png';
import dateInactiveIcon from '../assets/icons/UI/task-date-inactive.png';
import editActiveIcon from '../assets/icons/UI/task-edit-active.png';
import editInactiveIcon from '../assets/icons/UI/task-edit-inactive.png';
import TaskDelete from "./UI/TaskDelete";
import TextAreaAuto from "./UI/TextAreaAuto";

function TaskItem({ task }) {
    const [isDone, setIsDone] = useState(task.isDone);
    const [isExpanded, setIsExpanded] = useState(false);
    const [taskDescText, setTaskDescText] = useState(task.description);
    const [isEditMode, setIsEditMode] = useState(false);

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
                        <div className="w-[20px]">

                        <img
                            src={isExpanded ? dateInactiveIcon : dateActiveIcon}
                            alt="date-icon"
                            // className="h-[auto] w-[20px]"
                        />
                        </div>
                        <input type="date" className="text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey py-[8px] px-[12px] min-w-[200px]"></input>
                    </div>
                    <div className="flex flex-row gap-[15px]">
                        <div className="cursor-pointer pt-[5px]" onClick={() => { setIsEditMode(!isEditMode) }}>
                            <img
                                className="w-[20px] max-w-[unset]"
                                src={isEditMode ? editActiveIcon : editInactiveIcon}
                                alt="edit-icon"
                            />
                        </div>
                        <div className="cursor-pointer flex-grow" onClick={() => { setIsEditMode(true) }}>
                            {
                                isEditMode
                                    ? <TextAreaAuto value={taskDescText} onTextChange={setTaskDescText}></TextAreaAuto>
                                    : <div>{taskDescText}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;