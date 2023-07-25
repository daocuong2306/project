import { produce } from "immer"

const initialState = {
    items: [],
    product : []
} as { items: any[]  , product : any[]}
export const cartReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case 'cart/add' :
                drafState.product = action.payload;
                return;
            case 'cart/all':
                drafState.items = action.payload;
                return;
            case 'cart/increase':
                return;
            default:
                return state
        }
    })
}