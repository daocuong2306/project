import { getAllComments } from '@/api/comments';
import { createAsyncThunk } from '@reduxjs/toolkit'
export const getComments = createAsyncThunk('comments/getComments', async () => {
    try {
        const {data} = await getAllComments();
        console.log(data);
        return data
    } catch (error) { }
})