import { create, edit, getAll, getByIdCart, removeCart } from "@/api/cart";
import { getById } from "@/api/products";
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getCarts = createAsyncThunk('cart/getCarts', async () => {
    try {
        const { data } = await getAll();
        return data
    } catch (error) { }
})

export const addCart = createAsyncThunk('cart/addCart', async (id: any) => {
    try {
        const { data } = await getById(id);
        console.log("data cart", data);

        const check = await getAll();
        const existProductIndex = check.data.findIndex((item: any) => item.id === data.id);
        if (existProductIndex === -1) {
            const value = await create({ ...data, quantity: 1 });
            console.log(value.data);

            return value.data;
        } else {
            check.data[existProductIndex].quantity++
            await edit(id, check.data[existProductIndex])
        }
    } catch (error) {

    }
})

export const plusCart = createAsyncThunk('cart/plusCart', async (id: any) => {
    try {
        const { data } = await getByIdCart(id);
        data.quantity++;
        await edit(id, data)
        return id
    } catch (error) {

    }
})
export const remoteCart = createAsyncThunk('cart/remoteCart', async (id: any) => {
    const check = window.confirm("bạn có muốn xóa hay không");
    if (check) {
        await removeCart(id);
        return id;
    }
})
export const decreaseCart = createAsyncThunk('cart/decreaseCart', async (id: any) => {
    try {
        const { data } = await getByIdCart(id);
        if (data.quantity > 1) {
            data.quantity--;
            await edit(id, data)
            return { id }
        } else {
            const check = window.confirm("bạn có muốn xóa");
            if (check) {
                await removeCart(id);
                return { id, count: 1 }
            }
        }
    } catch (error) {
    }
})