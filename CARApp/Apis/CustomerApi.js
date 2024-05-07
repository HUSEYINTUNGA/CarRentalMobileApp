import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const CustomerApi = createApi({
  
    reducerPath: 'CustomerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://262f-5-176-237-25.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllCustomer:builder.query({
            query:()=>({
                url:'Customer/GetAllCustomer',
                method:'GET'
            })
        }),
        CreateCustomer:builder.mutation({
            query:(customerModel)=>({
                url:'Customer/CreateCustomer',
                method:'POST',
                body:customerModel
            })
        }),
        RemoveCustomer:builder.mutation({
            query:(customerId)=>({
                url:`Customer/DeleteCustomer/${customerId}`,
                method:'DELETE'
            })
        }),
        UpdateCustomer:builder.mutation({
            query:(model)=>({
                url:`Customer/UpdateCustomer${model.CustomerId}`,
                method:'PUT',
                body:model.customerModel
            })
        }),
        GetCustomerByCustomerId:builder.query({
            query:(customerId)=>({
                url:`Customer/GetCustomerByCustomerId/${customerId}`,
                method:'GET'
            })
        }),  
        LoginCustomer: builder.query({
            query: ({ customerEmail, customerPassword }) => ({
                url: `Customer/LoginCustomer?customerEmail=${customerEmail}&customerPassword=${customerPassword}`,
                method: 'GET',
            }),
        })
    })
})


export const {useGetAllCustomerQuery,useCreateCustomerMutation,useRemoveCustomerMutation,useUpdateCustomerMutation,useGetCustomerByCustomerIdQuery,useLoginCustomerQuery}=CustomerApi
export default CustomerApi