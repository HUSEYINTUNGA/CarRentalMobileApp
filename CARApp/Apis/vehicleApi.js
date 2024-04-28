import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
  
    reducerPath: 'vehicleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://a5e5-88-236-117-74.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllVehicle:builder.query({
            query:()=>({
                url:'Vehicle/GetAllVehicle',
                method:'GET'
            })
        }),
        CreateVehicle:builder.mutation({
            query:(vehicleModel)=>({
                url:'Vehicle/CreateVehicle',
                method:'POST',
                body:vehicleModel
            })
        }),
        RemoveVehicle:builder.mutation({
            query:(vehicleId)=>({
                url:`Vehicle/DeleteVehicle/${vehicleId}`,
                method:'DELETE'
            })
        }),
        UpdateVehicle:builder.mutation({
            query:(model)=>({
                url:`Vehicle/UpDateVehicle${model.VehicleId}`,
                method:'PUT',
                body:model.VehicleModel
            })
        }),
        GetVehicleByVehicleId:builder.query({
            query:(vehicleId)=>({
                url:`Vehicle/GetVehicleByVehicleId/${vehicleId}`,
                method:'GET'
            })
        }),
    
    })
})

export const {useGetAllVehicleQuery,useCreateVehicleMutation,useRemoveVehicleMutation,useUpdateVehicleMutation,useGetVehicleByVehicleIdQuery}=vehicleApi 
export default vehicleApi