import baseApi from "../../api/baseapi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
    yourOrder: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
        // body: data,
      }),
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: "/all-order",
        method: "GET",
        // body: data,
      }),
    }),
  }),
});
export const { usePlaceOrderMutation, useYourOrderQuery, useGetAllOrderQuery } =
  orderApi;
