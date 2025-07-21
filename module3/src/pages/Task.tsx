
import { AddTaskModel } from "@/components/module/tasks/AddTaskModal";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Task() {


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
                {/* {
                    tasks.map((task) => (
                        <TaskCard
                            key={task?.id}
                            task={task}
                        />
                    ))
                } */}
            </div>
        </div>
    )
}
