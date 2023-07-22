import { edit, getAll } from "@/api/cart";

export const getCarts = () => async (dispatch: any) => {
    try {
        const { data } = await getAll();

        dispatch({ type: "cart/all", payload: data })
    } catch (error) { }
}
