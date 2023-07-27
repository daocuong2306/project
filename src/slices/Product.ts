import { addProductApi, editProductApi, getProduct, getProductByID, removeProduct } from '@/actions/product'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [] as any[],
    product: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload;
        }), 
            builder.addCase(getProductByID.fulfilled, (state, action) => {
                state.product = action.payload;
            }),
            builder.addCase(removeProduct.fulfilled, (state, action) => {
                const id = action.payload
                state.products = state.products.filter((item: any) => item.id !== id)
            }),
            builder.addCase(addProductApi.fulfilled, (state, action) => {
                state.products.push(action.payload)
            }),
            builder.addCase(editProductApi.fulfilled, (state, action) => {
                const product = action.payload;
                console.log(product);
                state.products = state.products.map(item => item.id == product.id ? product : item)
            })
    }
})
export const productReducer = productSlice.reducer;