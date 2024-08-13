import Button from "./Button";
import TaskFilter from "./TaskFilter";

function TaskHeader() {
    return (
        <div className="flex flex-row items-center justify-between gap-[10px]">
            <TaskFilter/>
            <Button>New Task</Button>
        </div>
    )
}

export default TaskHeader;