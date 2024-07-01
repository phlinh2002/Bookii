
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface AccountState{
    amount:number;
}
export const initialState:AccountState={
    amount:0,
}
export const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        deposit:(state, action:PayloadAction<number>)=>{
            state.amount +=action.payload;
            return state;
        },
        withdraw :(state, action:PayloadAction<number>)=>{
            state.amount -=action.payload;
            return state;

        }
    }
});


export const { deposit, withdraw } = accountSlice.actions;


export default accountSlice.reducer;