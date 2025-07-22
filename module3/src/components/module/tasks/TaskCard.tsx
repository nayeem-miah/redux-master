import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Edit, Trash2 } from "lucide-react"
import type { ITask } from "@/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { useDeleteTaskMutation } from "@/redux/api/baseApi"

interface IProps {
    task: ITask

}

export default function TaskCard({ task }: IProps) {
    const date = task?.dueDate?.toString();
    const [deleteTask, { isLoading }] = useDeleteTaskMutation();



    const handleDelete = (taskId: string) => {
        toast.warning('Are you sure you want to delete this task?', {
            description: 'This action cannot be undone.',
            action: {
                label: 'Yes, Delete',
                onClick: async () => {
                    try {
                        await deleteTask(taskId).unwrap();
                        toast.success('✅ Task deleted successfully!');
                    } catch {
                        toast.error('❌ Failed to delete task!');
                    }
                },
            },
            cancel: {
                label: 'Cancel',
                onClick: () => {
                    toast.info('Task deletion cancelled.');
                },
            },
            duration: 6000,
        });
    };

    if (isLoading) return <p>Loading tasks...</p>;

    if (isLoading) return <p>Deleting...</p>;
    return (
        <div>
            <Card className="shadow-md hover:shadow-xl transition">
                <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{task?.title}</h2>
                        <Badge
                            variant={task?.priority === "high" ? "destructive" : "default"}
                        >
                            {task?.priority}
                        </Badge>
                    </div>
                    <div className={cn("flex justify-between items-center", {
                        "bg-green-500": task?.priority === "low",
                        "bg-red-500": task?.priority === "high",
                        "bg-yellow-500": task?.priority === "medium",
                    })}></div>
                    <p className="text-sm text-muted-foreground">{task?.description}</p>

                    <div className="text-sm flex items-center gap-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        Due: {date || "no date found"}
                    </div>
                    {/* <p>assign to : {assignData?.name || "No One"}</p> */}
                    <div className="flex items-center gap-2 text-sm mt-2">
                        {task.isCompleted ? (
                            <span className="text-green-600 flex items-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                Completed
                            </span>
                        ) : (
                            <span className="text-yellow-600 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Pending
                            </span>
                        )}
                    </div>

                    <div className="flex justify-between mt-4">
                        <Button
                            variant="secondary"
                        // onClick={() => dispatch(toggleCompletedTask(task.id))}
                        >
                            {task.isCompleted ? "Undo" : "Mark as Done"}
                        </Button>

                        <Button
                        // onClick={() => dispatch(updateTask(task.id))}
                        >
                            <Edit className="w-1 h-4 mr-1" />
                            Update Task
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => handleDelete(task._id)}
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}
