import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App />,
        Component: App,
        children: [
            {
                index: true,
                // path: "task",
                Component: Task
            },
            {
                path: "tasks",
                Component: Task
            },
            {
                path: "user",
                element: <User />
            },

        ]
    }

])

export default router