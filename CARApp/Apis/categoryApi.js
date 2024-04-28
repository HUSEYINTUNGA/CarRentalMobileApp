import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://a5e5-88-236-117-74.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllCategory:builder.query({
            query:()=>({
                url:'Category',
                method:'GET'
            })
        }),
        CreateCategory:builder.mutation({
            query:(categoryModel)=>({
                url:'Category',
                method:'POST',
                body:categoryModel
            })
        }),
        RemoveCategory:builder.mutation({
            query:(categoryId)=>({
                url:`Category/${categoryId}`,
                method:'DELETE'
            })
        }),
        UpdateCategory:builder.mutation({
            query:(model)=>({
                url:`Category/${model.categoryId}`,
                method:'PUT',
                body:model.categoryModel
            })
        }),
        GetVehicleByCategoryId:builder.query({ 
            query:(categoryId)=>({
                url:`Category/GetVehicleByCategoryId/${categoryId}`,
                method:'GET'
            })    
        })   
    })
})

export const {useGetAllCategoryQuery,useCreateCategoryMutation,useRemoveCategoryMutation,useUpdateCategoryMutation,useGetVehicleByCategoryIdQuery}=categoryApi 
export default categoryApi