import { createSlice } from "@reduxjs/toolkit";
import { getUserAction } from "./userAction";

const userSlice = createSlice({
    name:"registerData",
    initialState:{
        // allUsers:[]
    },
    reducers:{},
    extraReducers(builder){
builder 
.addCase(getUserAction.pending, (state, { payload }) => {
    state.loading = true
})
.addCase(getUserAction.fulfilled, (state, { payload }) => {
    state.loading = false
    state.allUsers =payload
})
.addCase(getUserAction.rejected, (state, { payload }) => {
    state.loading = false
    state.error = payload
})}
}) 

export default userSlice.reducer