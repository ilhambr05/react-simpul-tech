import { useEffect, useState } from "react";
import TaskHeader from "./UI/TaskHeader";
import Loader from "./UI/Loader";
import TaskItem from "./TaskItem";
import dummyTasks from "../dummy/tasks";

function Task() {
    const [isLoading, setIsLoading] = useState(false);
    const [isMakingNewTask, setIsMakingNewTask] = useState(false);
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setTaskData(dummyTasks);
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            <TaskHeader isMakingNewTask={isMakingNewTask} setIsMakingNewTask={setIsMakingNewTask} />
            {
                isLoading
                    ? <Loader>Loading Task List ...</Loader>
                    :
                    <div className="overflow-y-auto py-[15px]">
                        {
                            isMakingNewTask && <TaskItem isNewTask={true} />
                        }
                        {
                            taskData.map((task, index) => {
                                return (
                                    <TaskItem key={index} task={task} />
                                );
                            })
                        }
                        {/* <TaskItem task={{ isDone: false, title: 'task.title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis, libero laborum deleniti, neque porro laudantium aliquid cum nemo, mollitia recusandae incidunt natus saepe tenetur perspiciatis? Ea repellendus non mollitia!', dueDate: '2024-01-30', daysRemain: '2' }} /> */}
                        {/* <TaskItem task={{ isDone: false, title: 'task.title', description: '', dueDate: '2024-01-29', daysRemain: '1' }} /> */}
                    </div>
            }
        </>
    );
}

export default Task;