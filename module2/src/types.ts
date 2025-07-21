export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "high" | "medium" | "low";
    assignTo: string | number
};


export interface IUser {
    id: string;
    name: string;
}