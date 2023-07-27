import { addCart, decreaseCart, getCarts, plusCart, remoteCart } from '@/actions/cart';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
    product: []
} as { items: any[], product: any[] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCart.fulfilled, (state, action) => {

        }),
            builder.addCase(getCarts.fulfilled, (state, action) => {
                state.items = action.payload;
                console.log(action.payload);
                
            }),
            builder.addCase(plusCart.fulfilled, (state, action) => {
                state.items.find((item: any) => item.id === action.payload).quantity++
            }),
            builder.addCase(decreaseCart.fulfilled, (state, action) => {
                state.items.find((item: any) => item.id === action.payload).quantity--
            }),
            builder.addCase(remoteCart.fulfilled, (state, action) => {
                const id = action.payload
                state.items = state.items.filter((item: any) => item.id !== id)
            })
    }
})
export const cartReducer = cartSlice.reducer;