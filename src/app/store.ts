import { productReducer } from '../slices/Product';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartReducer } from '@/slices/Cart';
import { userReducer } from '@/slices/User';
import { commentsReducer } from '@/slices/Comments';
const store = configureStore(
    {
        reducer: {
            user: userReducer,
            products: productReducer,
            cart: cartReducer,
            comments : commentsReducer
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