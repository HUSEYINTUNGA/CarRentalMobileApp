import { configureStore,createReducer } from "@reduxjs/toolkit";
import {categoryApi} from "../Apis/categoryApi";
import { vehicleApi } from "../Apis/vehicleApi";
import{CustomerApi} from "../Apis/CustomerApi";
import {rentalHistoryApi} from "../Apis/rentalHistoryApi";
import { vehicleReducer } from "./redux/vehicleSlice";
import {categoryReducer} from "./redux/categorySlice";
import{customerReducer} from "./redux/customerSlice";
import {rentalHistoryReducer} from "./redux/rentalHistorySlice";
export const store=configureStore({
    reducer:{

        vehicleStore:vehicleReducer,
        categoryStore:categoryReducer,
        customerStore:customerReducer,
        rentalHistoryStore:rentalHistoryReducer,

        [categoryApi.reducerPath]:categoryApi.reducer,
        [vehicleApi.reducerPath]:vehicleApi.reducer,
        [CustomerApi.reducerPath]:CustomerApi.reducer,
        [rentalHistoryApi.reducerPath]:rentalHistoryApi.reducer,

    },middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(categoryApi.middleware,vehicleApi.middleware,CustomerApi.middleware,rentalHistoryApi.middleware)

})