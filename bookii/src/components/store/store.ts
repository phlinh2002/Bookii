import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice'
import accountReducer from'./accountSlide'
import userReducer from './userSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    books: booksReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectAmountFromState = (state:RootState) =>state.account.amount;
export const selectUserRole = (state:RootState) =>state.user.role;
export const selectCartItems = (state: RootState) => state.cart.items;
