import { api } from './api/index';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (body) => ({
        url: '/phones',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    getProducts: build.query({
      query: () => ({
        url: '/phones',
      }),
      providesTags: ['Product'],
    }),
    updateProduct: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/phones/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/phones/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
