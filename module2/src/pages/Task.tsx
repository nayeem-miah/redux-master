
import { AddTaskModel } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/TaskSlice";
import { useAppSelector } from "@/redux/hooks"


export default function Task() {
    const tasks = useAppSelector(selectTask);
    const handleDelete = (id: string) => {
        console.log(id);
    };

    const handleToggleComplete = (id: string) => {
        console.log(id);
    };


    return (
        <div>
            <div className="flex justify-between items-center" >
                <h3 className="text-2xl text-center font-bold">all tasks</h3>
                <AddTaskModel />
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    tasks.map((task) => (
                        <TaskCard
                            key={task?.id}
                            task={task}
                            onDelete={() => handleDelete(task?.id)}
                            onToggleComplete={() => handleToggleComplete(task?.id)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
