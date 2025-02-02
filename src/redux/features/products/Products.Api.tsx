/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../api/baseapi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (args: any) => {
        const params: Record<string, string> = {}; // ✅ Use an object

        if (args?.searchTerm) {
          params.searchTerm = args.searchTerm; // ✅ Correct format
        }

        return {
          url: "/products",
          method: "GET",
          params, // ✅ Pass the object, NOT `params.toString()`
        };
      },
    }),

    createProducts: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    // deleteProducts: builder.query({
    //   query: () => ({
    //     url: "/products",
    //     method: "GET",
    //     // body: data,
    //   }),
    // }),
    deleteProducts: builder.mutation({
      query: (_id) => {
        return {
          url: `/products/${_id}`,
          method: "DELETE",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (args) => {
        return {
          url: `/products/${args.id}`,
          method: "PATCH",
          body: args.data,
        };
      },
    }),
  }),
});
export const {
  useAllProductsQuery,
  useCreateProductsMutation,
  useDeleteProductsMutation,
  useUpdateProductMutation,
} = productsApi;
