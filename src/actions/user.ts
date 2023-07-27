import { getAll } from "@/api/user";
import { createAsyncThunk } from '@reduxjs/toolkit'
export const loginUser = createAsyncThunk('user/loginUser', async () => {
    try {
        const users = await getAll();
        return users
    } catch (error) { }
})