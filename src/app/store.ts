import { productReducer } from '../slices/Product';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartReducer } from '@/slices/Cart';
import { userReducer } from '@/slices/User';
const store = configureStore(
    {
        reducer: {
            user: userReducer,
            products: productReducer,
            cart: cartReducer
        }
    }
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store 