import { addComments, getComments } from '@/actions/comments';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: [] as any[],
    comment: {}
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        }),
        builder.addCase(addComments.fulfilled, (state, action) => {
            console.log(action.payload);
            
            state.comments.push(action.payload)
        })
    }
})
export const commentsReducer = commentsSlice.reducer;