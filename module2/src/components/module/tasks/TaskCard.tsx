import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Trash2 } from "lucide-react"
import type { ITask } from "@/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface IProps {
    task: ITask
    onDelete: (id: string) => void
    onToggleComplete: (id: string) => void
}

export default function TaskCard({ task, onDelete, onToggleComplete }: IProps) {
    const date = task.dueDate.toString();

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
                        Due: {date}
                    </div>

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
                            onClick={() => onToggleComplete(task.id)}
                        >
                            {task.isCompleted ? "Undo" : "Mark as Done"}
                        </Button>

                        <Button
                            variant="destructive"
                            onClick={() => onDelete(task.id)}
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
