import { produce } from "immer"

const initialState = {
    items: [],
    product: []
} as { items: any[], product: any[] }
export const cartReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case 'cart/add':
                drafState.product = action.payload;
                return;
            case 'cart/all':
                drafState.items = action.payload;
                return;
            case 'cart/increase':
                drafState.items.find((item: any) => item.id === action.payload).quantity++
                return;
            case 'cart/decrease':
                drafState.items.find((item: any) => item.id === action.payload).quantity--
                return;
            case 'cart/remote':
                const id = action.payload
                console.log(id);
                drafState.items = state.items.filter((item: any) => item.id !== id)
                return;
            default:
                return state
        }
    })
}