import { create, getAll } from "@/api/cart";
import { getById } from "@/api/products";

export const getCarts = () => async (dispatch: any) => {
    try {
        const { data } = await getAll();

        dispatch({ type: "cart/all", payload: data })
    } catch (error) { }
}

export const addCart = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getById(id);
        const check = await getAll();
        const existProductIndex = check.data.findIndex((item: any) => item.id === data.id);
        if (existProductIndex === -1) {
            await create({ ...data, quantity: 1 });
        }   else {
            
        }

    } catch (error) {

    }
}