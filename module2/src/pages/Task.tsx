
import { AddTaskModel } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter, } from "@/redux/features/task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"


export default function Task() {
    const tasks = useAppSelector(selectTask);
    const dispatch = useAppDispatch();


    return (
        <div>
            <div className="flex justify-between items-center gap-5" >
                <h3 className="text-2xl text-center font-bold">all tasks</h3>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("all"))} value="all">
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("low"))} value="low">
                            Low
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("medium"))} value="medium">
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("high"))} value="high">
                            High
                        </TabsTrigger>
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
