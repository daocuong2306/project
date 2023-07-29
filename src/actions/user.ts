import { getAll } from "@/api/user";
import { createAsyncThunk } from '@reduxjs/toolkit'
export const loginUser = createAsyncThunk('user/loginUser', async () => {
    try {
        const {data} = await getAll();
        return data
    } catch (error) { }
})
