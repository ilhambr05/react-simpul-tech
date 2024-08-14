import Button from "./Button";
import TaskFilter from "./TaskFilter";

function TaskHeader({isMakingNewTask, setIsMakingNewTask}) {
    return (
        <div className="flex flex-row items-center justify-between gap-[10px]">
            <TaskFilter/>
            <Button onClick={() => setIsMakingNewTask(!isMakingNewTask)}>New Task</Button>
        </div>
    )
}

export default TaskHeader;