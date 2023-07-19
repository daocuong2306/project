import { produce } from 'immer';
const initialState = {
    products: [] as any[]
}

export const productReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "admin/fetch_product":
                drafState.products = action.payload;
                return;
            case "admin/fetch_productById":
                drafState.products = action.payload;
                return;
            case "admin/add_product":
                drafState.products.push(action.payload)
                return;
            case "admin/update_product":
                const product = action.payload;
                drafState.products = state.products.map((item: any) =>
                    item.id === product.id ? product : item
                );
                return;
            case "admin/delete_product":
                const id = action.payload
                drafState.products = state.products.filter((item: any) => item.id !== id)
                return;

            default:
                return drafState

        }
    })
}