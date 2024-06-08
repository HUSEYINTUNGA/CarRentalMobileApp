import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { config } from './config';

export const CustomerApi = createApi({

    reducerPath: 'CustomerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
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
        LoginCustomer: builder.mutation({
            query: (customerLoginModel ) => ({
                url: `Customer/LoginCustomer`,
                method: 'POST',
                body: customerLoginModel
            }),
        }),
        LoginAdmin: builder.mutation({
            query:(adminLoginModel)=>({
                url: `Customer/LoginAdmin`,
                method: 'POST',
                body: adminLoginModel
            })
        }),
        SetRolesOfCustomer: builder.mutation({
            query:(model)=>({
                url:`Customer/SetRolesOfUsers/${model.customerId}`,
                method:'POST',
                body:model
            })
        })
    })
})


export const {useGetAllCustomerQuery,useCreateCustomerMutation,useRemoveCustomerMutation,useUpdateCustomerMutation,useGetCustomerByCustomerIdQuery,useLoginCustomerMutation,useLoginAdminMutation,useSetRolesOfCustomerMutation}=CustomerApi
export default CustomerApi