import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bike-store-api.vercel.app/api",
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
export default baseApi;
