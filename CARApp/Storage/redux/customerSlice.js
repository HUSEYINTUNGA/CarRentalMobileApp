import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    customers: [],
    customerId:"",
}


export const customerSlice = createSlice({
    name: "customer",
    initialState: initialState,
    reducers: {
        getAllCustomer:(state,action)=>{
            state.customers = action.payload;
        }
    }
})

export const {getAllCustomer} = customerSlice.actions;
export const customerReducer=customerSlice.reducer;