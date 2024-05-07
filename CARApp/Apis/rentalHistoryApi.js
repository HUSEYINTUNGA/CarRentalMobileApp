import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rentalHistoryApi = createApi({

    reducerPath: 'rentalHistory',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://262f-5-176-237-25.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllHistory:builder.query({
            query:()=>({
                url:'History/GetAllHistory',
                method:'GET'
            })
        }),
        CreateHistory:builder.mutation({
            query:(historyModel)=>({
                url:'History/CreateHistory',
                method:'POST',
                body:historyModel
            })
        }),
        GetHistoryByVehicleId:builder.query({
            query:(vehicleId)=>({
                url:`History/GetHistoryByVehicleId/${vehicleId}`,
                method:'GET'
            })
        }),
        GetHistoryByCustomerId:builder.query({
            query:(customerId)=>({
                url:`History/GetHistoryByCustomerId/${customerId}`,
                method:'GET'
            })
        }),
    })
})

export const {useGetAllHistoryQuery,useCreateHistoryMutation,useGetHistoryByVehicleIdQuery,useGetHistoryByCustomerIdQuery}=rentalHistoryApi
export default rentalHistoryApi