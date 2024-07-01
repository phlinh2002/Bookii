import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice'
import emailReducer from './emailSlice'
import accountReducer from'./accountSlide'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    eMail: emailReducer,
    books: booksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectEmailFromState = (state:RootState) => state.eMail.emailAdress;
export const selectAmountFromState = (state:RootState) =>state.account.amount;
export const selectUserRole = (state:RootState) =>state.user.role;

