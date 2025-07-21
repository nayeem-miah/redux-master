import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["task"],
    endpoints: (builder) => (
        {
            getTasks: builder.query({
                query: () => "/tasks",
                providesTags: ["task"]
            }),
            crateTask: builder.mutation({
                query: (newTask) => ({
                    url: "/tasks",
                    method: "POST",
                    body: newTask
                }),
                invalidatesTags: ["task"]
            })
        }
    )
});

export const { useGetTasksQuery, useCrateTaskMutation } = baseApi;