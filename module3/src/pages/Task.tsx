
import { AddTaskModel } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";


export default function Task() {
    const { data, isLoading, isError } = useGetTasksQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true

    });

    // console.log({ data, isLoading, isError });
    if (isError) return <p>Something went wrong</p>
    if (isLoading) return <p>loading............</p>

    return (
        <div>
            <div className="flex justify-between items-center gap-5" >
                <h3 className="text-2xl text-center font-bold">all tasks</h3>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger
                            value="all">
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            value="low">
                            Low
                        </TabsTrigger>
                        <TabsTrigger
                            value="medium">
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            value="high">
                            High
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModel />
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    !isLoading && data?.tasks?.map((task: ITask) => (
                        <TaskCard
                            key={task?._id}
                            task={task}
                        />
                    ))
                }
            </div>
        </div>
    )
}
