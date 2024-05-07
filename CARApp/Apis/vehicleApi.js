import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
  
    reducerPath: 'vehicleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://262f-5-176-237-25.ngrok-free.app/api/',
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
                body:model.vehicleModel
            })
        }),
        GetVehiclesByVehicleId:builder.query({
            query:(vehicleId)=>({
                url:`Vehicle/GetVehiclesByVehicleId/${vehicleId}`,
                method:'GET'
            })
        }),
    
    })
})

export const {useGetAllVehicleQuery,useCreateVehicleMutation,useRemoveVehicleMutation,useUpdateVehicleMutation,useGetVehiclesByVehicleIdQuery}=vehicleApi 
export default vehicleApi