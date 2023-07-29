import { addComment, getAllComments } from '@/api/comments';
import { createAsyncThunk } from '@reduxjs/toolkit'
export const getComments = createAsyncThunk('comments/getComments', async () => {
    try {
        const {data} = await getAllComments();
        console.log(data);
        return data
    } catch (error) { }
})

export const addComments = createAsyncThunk('comments/addComments', async (data :any) => {
    try {
        console.log(data);
        
        const comment = await addComment(data);
        console.log(comment);
        
        return comment
    } catch (error) { }
})