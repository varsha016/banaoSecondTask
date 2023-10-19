import { createAsyncThunk } from "@reduxjs/toolkit"
 import axios from "axios"
 export const getUserAction= createAsyncThunk("get/user", async (userData, {rejectWithValue,getState})=>{
     try {
        const { data  } = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users", userData)
      console.log(data);
      
        return data
        
    } catch (error) {
        rejectWithValue(error)
    }
})