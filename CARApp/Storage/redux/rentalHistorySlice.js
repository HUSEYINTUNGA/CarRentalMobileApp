import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    RentalHistories: [],
    RentalHistoryId:"",
}


export const rentalHistorySlice = createSlice({
    name: "rentalHistory",
    initialState: initialState,
    reducers: {
        getAllHistory:(state,action)=>{
            state.RentalHistories = action.payload;
        }
    }
})

export const {getAllHistory} = rentalHistorySlice.actions;
export const rentalHistoryReducer=rentalHistorySlice.reducer;