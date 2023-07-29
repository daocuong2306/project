import { getUsers, loginUser } from '@/actions/user';
import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user: {} as any
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})
export const userReducer = userSlice.reducer;