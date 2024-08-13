import { useEffect, useState } from "react";
import TaskHeader from "./UI/TaskHeader";
import Loader from "./UI/Loader";

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
                    <div className="overflow-y-auto">
                        Task LOADED
                    </div>
            }
        </>
    );
}

export default Task;