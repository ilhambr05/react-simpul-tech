import { useEffect, useState } from "react";
import TaskHeader from "./UI/TaskHeader";
import Loader from "./UI/Loader";
import TaskItem from "./TaskItem";

function Task() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            <TaskHeader />
            {
                isLoading
                    ? <Loader>Loading Task List ...</Loader>
                    :
                    <div className="overflow-y-auto py-[15px]">
                        <TaskItem task={{ isDone: false, title: 'task.title', description: 'task.description', dueDate: 'task.dueDate', dueTime: 'task.dueTime' }} />
                        <TaskItem task={{ isDone: false, title: 'task.title', description: 'task.description', dueDate: 'task.dueDate', dueTime: 'task.dueTime' }} />
                    </div>
            }
        </>
    );
}

export default Task;