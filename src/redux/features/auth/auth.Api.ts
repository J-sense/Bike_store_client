import baseApi from "../../api/baseapi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/changePassword",
        method: "POST",
        body: data,
      }),
    }),
    allUser: builder.query({
      query: () => ({
        url: "/auth/all",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useRegisterUserMutation,
  useUpdatePasswordMutation,
  useAllUserQuery,
} = authApi;
