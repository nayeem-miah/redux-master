
import { AddTaskModel } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, } from "@/redux/features/task/TaskSlice";
import { useAppSelector } from "@/redux/hooks"


export default function Task() {
    const tasks = useAppSelector(selectTask);


    return (
        <div>
            <div className="flex justify-end items-center gap-5" >
                <h3 className="text-2xl text-center font-bold">all tasks</h3>
                <Tabs>
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="low">Low</TabsTrigger>
                        <TabsTrigger value="medium">Medium</TabsTrigger>
                        <TabsTrigger value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModel />
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    tasks.map((task) => (
                        <TaskCard
                            key={task?.id}
                            task={task}
                        />
                    ))
                }
            </div>
        </div>
    )
}
