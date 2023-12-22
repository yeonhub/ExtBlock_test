import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    ExtBlockFixed: [],
    ExtBlockCustom: []
}
export const getExtBlockFixed = createAsyncThunk(
    'ExtBlock/getExtBlockFixed',
    async () => {
        const res = await axios.get(`http://localhost:3000/ExtBlock/ExtBlockFixed`)
        return res.data
    }
)

export const getExtBlockCustom = createAsyncThunk(
    'ExtBlock/getExtBlockCustom',
    async () => {
        const res = await axios.get(`http://localhost:3000/ExtBlock/ExtBlockCustom`)
        return res.data
    }
)
export const ExtBlockFixedSlice = createSlice({
    name: 'ExtBlock',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getExtBlockFixed.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.ExtBlockFixed = action.payload
            })
            .addCase(getExtBlockCustom.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.ExtBlockCustom = action.payload
            })
    }
})

export default ExtBlockFixedSlice.reducer