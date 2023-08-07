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
                const productFound = state.items.find((item: any) => item.id === action.payload.id);
                console.log("productFound", productFound);
                console.log(action.payload);

                productFound.quantity--;
                if (productFound.quantity <= 1) {
                    if (action.payload.count) state.items = state.items.filter((item: any) => item.id !== action.payload.id);
                    productFound.quantity = 1
                }
            }
            ),
            builder.addCase(remoteCart.fulfilled, (state, action) => {
                const id = action.payload
                state.items = state.items.filter((item: any) => item.id !== id)
            })
    }
})
export const cartReducer = cartSlice.reducer;