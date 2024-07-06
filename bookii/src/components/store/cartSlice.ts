import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../domain/books';

interface CartState {
    items: Book[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Book>) => {
            
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(book => book.id !== action.payload);
        },
        clearCart: (state)=>{
            state.items=[];
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
