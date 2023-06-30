import { createSlice } from "@reduxjs/toolkit";
import data from "../data/dataSize";

const todoSlice = createSlice({
    name: 'size',
    initialState: data,
    reducers: {
        setProjectHeaderWidth(state, action) {
            state.projectHeader = state.content
        }
    }
})

export const {setProjectHeaderWidth} = todoSlice.actions

export default todoSlice.reducer