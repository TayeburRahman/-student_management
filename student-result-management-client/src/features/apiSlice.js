import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.SERVER_API_BASE_URL
    }),
    tagTypes: [],
    endpoints:(builder) =>({ }),
})