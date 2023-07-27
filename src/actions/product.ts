import { create, edit, getAll, getById, remove } from "@/api/products"
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getProduct = createAsyncThunk('product/getAll', async () => {
    const { data } = await getAll()
    return data
})
export const getProductByID = createAsyncThunk('product/getProductId', async (id:any) => {
    const { data } = await getById(id);
    return data
})

export const removeProduct = createAsyncThunk('product/removeProduct', async (id : any) => {
    await remove(id)
})
export const addProductApi = createAsyncThunk('product/addProductApi', async (data:any) => {
    try {
        const product = await create(data)
        return product
    } catch (error) { }
})

export const editProductApi = createAsyncThunk('product/editProductApi', async (d:any) => {
    try {
        const {data}  = await edit(d);
        return data
    } catch (error) { }
})