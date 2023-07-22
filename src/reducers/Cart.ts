import { produce } from "immer"

const initialState = {
    items: []
} as { items: any[] }
export const cartReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case 'cart/all':
                drafState.items = action.payload;
                console.log(drafState.items);

                return;
            case 'cart/increase':
                console.log(state.items);
                console.log(action.payload);
                
                drafState.items = state.items.find((item: any) => item.id === action.payload).quantily++;
                console.log(drafState.items);
                return;
            default:
                return state
        }
    })
}