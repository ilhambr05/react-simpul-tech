import { useEffect, useRef, useState } from "react";
import Checkbox from "./UI/Checkbox";
import expandIcon from '../assets/icons/UI/expand.png';
import dateActiveIcon from '../assets/icons/UI/task-date-active.png';
import dateInactiveIcon from '../assets/icons/UI/task-date-inactive.png';
import editActiveIcon from '../assets/icons/UI/task-edit-active.png';
import editInactiveIcon from '../assets/icons/UI/task-edit-inactive.png';
import TaskDelete from "./UI/TaskDelete";
import TextAreaAuto from "./UI/TextAreaAuto";
import TypeBar from "./UI/TypeBar";
import TaskTags from "./UI/TaskTags";

function TaskItem({ task = [], isNewTask = false }) {
    const [isDone, setIsDone] = useState(task.isDone || false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isExpanded, setIsExpanded] = useState(isNewTask);

    // inputs
    const [taskTitle, setTaskTitle] = useState(task.title || '');
    const [taskDate, setTaskDate] = useState(task.dueDate || '');
    const [taskDescText, setTaskDescText] = useState(task.description || '');
    const [activeTags, setActiveTags] = useState(task.tags || []);

    const newTaskTitle = useRef();

    useEffect(() => {
        if (isNewTask && newTaskTitle.current) {
            newTaskTitle.current.focus();
        }
    }, [isNewTask]);

    function handleEditMode(newEditMode) {
        setIsEditMode(newEditMode);
        // others
    }

    function handleOnCheck() {
        setIsDone(!isDone);
        // others
    }

    function handleActiveTags(tagName) {
        if (activeTags.includes(tagName)) {
            setActiveTags(activeTags.filter(tag => tag !== tagName));
        } else {
            setActiveTags([...activeTags, tagName]);
        }
        // others
    }

    return (
        <div className="flex py-[15px] border-b-2 border-solid border-primary-grey">
            <div className="flex flex-row flex-grow gap-[20px]">
                <Checkbox isChecked={isDone} onChange={handleOnCheck} />
                <div className="flex flex-col flex-grow">
                    {/* header */}
                    <div className="flex flex-row gap-[15px]">
                        {
                            isNewTask
                                ?
                                <TypeBar ref={newTaskTitle} placeholder="Type Task Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                                :
                                <>
                                    <div className={`flex-grow font-bold text-primary-dark-grey text-[16px] ${isDone ? "line-through text-primary-grey" : ""}`}>{task.title}</div>
                                    <div className="text-indicator-red text-[14px]">{task.daysRemain} Day{task.daysRemain > 1 ? 's' : ''} Left</div>
                                    <div className="text-primary-dark-grey text-[14px]">{task.dueDate}</div>
                                </>
                        }
                        <div className="flex flex-row gap-[5px]">
                            <div className="flex justify-center cursor-pointer p-[5px] min-w-[20px]"
                                onClick={() => { setIsExpanded(!isExpanded) }}>
                                <img
                                    src={expandIcon}
                                    alt="collapse/expand"
                                    className={`w-[11px] h-[8px] mt-[2px] transition-all duration-500 ${isExpanded ? "rotate-180" : ""}`}
                                />
                            </div>
                            <TaskDelete />
                        </div>
                    </div>
                    {/* expandable content */}
                    <div className={`flex flex-col gap-[15px] overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="flex items-center gap-[15px] mt-[15px]">
                            {/* date selector */}
                            <div className="w-[20px]">
                                <img
                                    // src={dateInactiveIcon}
                                    src={taskDate ? dateActiveIcon : dateInactiveIcon}
                                    alt="date-icon"
                                // className="h-[auto] w-[20px]"
                                />
                            </div>
                            <div>
                                <input type="date" placeholder="dd-mm-yyyy" value={taskDate} onChange={e => setTaskDate(e.target.value)}
                                    className="text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey py-[8px] px-[12px] min-w-[200px]"></input>
                                <input type="date" placeholder="dd-mm-yyyy" value={taskDate} onChange={e => setTaskDate(e.target.value)}
                                    className="w-[33px] -ml-[33px] text-primary-dark-grey border-r rounded-[5px] py-[8px] pr-[12px]"></input>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[15px]">
                            {/* description input */}
                            <div className="cursor-pointer" onClick={() => { handleEditMode(!isEditMode) }}>
                                <img
                                    className="w-[20px] max-w-[unset]"
                                    // src={editActiveIcon}
                                    src={taskDescText ? editActiveIcon : editInactiveIcon}
                                    alt="edit-icon"
                                />
                            </div>
                            <div className="cursor-pointer flex-grow" onClick={() => { handleEditMode(true) }}>
                                {
                                    isEditMode
                                        ?
                                        <TextAreaAuto value={taskDescText} onTextChange={setTaskDescText}></TextAreaAuto>
                                        : <p>{taskDescText || "No Description"}</p>
                                }
                            </div>
                        </div>
                        <div>
                            {/* task tags */}
                            <TaskTags activeTags={activeTags} setActiveTags={handleActiveTags} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;