import { create, edit, getAll, getByIdCart, removeCart } from "@/api/cart";
import { getById } from "@/api/products";

export const getCarts = () => async (dispatch: any) => {
    try {
        const { data } = await getAll();

        dispatch({ type: "cart/all", payload: data })
    } catch (error) { }
}

export const addCart = (id: any) => async () => {
    try {
        const { data } = await getById(id);
        const check = await getAll();
        console.log(check.data);

        const existProductIndex = check.data.findIndex((item: any) => item.id === data.id);
        if (existProductIndex === -1) {
            await create({ ...data, quantity: 1 });
        } else {
            check.data[existProductIndex].quantity++
            await edit(id, check.data[existProductIndex])
        }
    } catch (error) {

    }
}


export const plusCart = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getByIdCart(id);
        data.quantity++;
        await edit(id, data)
        dispatch({ type: "cart/increase", payload: id })
    } catch (error) {

    }
}
export const remoteCart = (id: any) => async (dispatch: any) => {
    const check = window.confirm("bạn có muốn xóa hay không");
    if (check) {
        await removeCart(id);
        dispatch({ type: 'cart/remote', payload: id })
    }

}
export const decreaseCart = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getByIdCart(id);
        console.log(data.quantity);
        if (data.quantity > 1) {
            data.quantity--;
            await edit(id, data)
            dispatch({ type: "cart/decrease", payload: id })
        } else {
            const check = window.confirm("bạn có muốn xóa");
            if (check) {
                await removeCart(id);
                dispatch({ type: 'cart/remote', payload: id })
            }
        }
    } catch (error) {

    }
}