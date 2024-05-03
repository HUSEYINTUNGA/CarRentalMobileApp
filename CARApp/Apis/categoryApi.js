import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://d8d3-5-176-236-148.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllCategory:builder.query({
            query:()=>({
                url:'Category/GetAllCategory',
                method:'GET'
            })
        }),
        CreateCategory:builder.mutation({
            query:(categoryModel)=>({
                url:'Category/CreateCategory',
                method:'POST',
                body:categoryModel
            })
        }),
        RemoveCategory:builder.mutation({
            query:(categoryId)=>({
                url:`Category/DeleteCategory/${categoryId}`,
                method:'DELETE'
            })
        }),
        UpdateCategory:builder.mutation({
            query:(model)=>({
                url:`Category/UpdateCategory/${model.categoryId}`,
                method:'PUT',
                body:model.categoryModel
            })
        }),
        GetVehiclesByCategoryId:builder.query({ 
            query:(categoryId)=>({
                url:`Category/GetVehiclesByCategoryId/${categoryId}`,
                method:'GET'
            })    
        })   
    })
})

export const {useGetAllCategoryQuery,useCreateCategoryMutation,useRemoveCategoryMutation,useUpdateCategoryMutation,useGetVehiclesByCategoryIdQuery}=categoryApi 
export default categoryApi