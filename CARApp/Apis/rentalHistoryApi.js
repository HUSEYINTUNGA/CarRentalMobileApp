import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { config } from './config';

export const rentalHistoryApi = createApi({

    reducerPath: 'rentalHistory',
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
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
        ConfirmingHistoryRecord:builder.mutation({
            query:(historyModel)=>({
                url:`History/ConfirmingHistoryRecord/${historyModel.historyId}`,
                method:'POST',
                body:historyModel
            })
        })
        
    })
})

export const {useGetAllHistoryQuery,useCreateHistoryMutation,useGetHistoryByVehicleIdQuery,useGetHistoryByCustomerIdQuery,useConfirmingHistoryRecordMutation}=rentalHistoryApi
export default rentalHistoryApi