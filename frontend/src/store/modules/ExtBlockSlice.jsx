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

export const putExtBlockFixedChk = createAsyncThunk(
    'ExtBlock/putExtBlockFixedChk',
    async (obj) => {
        const id = obj.id
        const res = await axios.put(`http://localhost:3000/ExtBlock/ExtBlockFixed/${id}`, obj)
        return obj;
    }
)
export const addExtBlockCustom = createAsyncThunk(
    'ExtBlock/addExtBlockCustom',
    async (extension) => {
        const newCustom = extension.inputValue
        const res = await axios.post(`http://localhost:3000/ExtBlock/ExtBlockCustom/${newCustom}`);
        return extension;
    }
)
export const delExtBlockCustom = createAsyncThunk(
    'ExtBlock/delExtBlockCustom',
    async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/ExtBlock/ExtBlockCustom/${id}`, id)
        return id;
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
            .addCase(putExtBlockFixedChk.fulfilled, (state, action) => {
                const { id, currentChk } = action.payload;
                const item = state.ExtBlockFixed.find(item => item.id === id);
                if (item) {
                    item.isChecked = currentChk;
                }
            })
            .addCase(addExtBlockCustom.fulfilled, (state, action) => {
                const { id, inputValue } = action.payload;
                let newCustom = {
                    id: id,
                    extension: inputValue,
                    isChecked: false
                }
                state.ExtBlockCustom.push(newCustom);
            })
            .addCase(delExtBlockCustom.fulfilled, (state, action) => {
                const { id } = action.payload;
                state.ExtBlockCustom = state.ExtBlockCustom.filter(item => item.id !== id);
            })
    }
})

export default ExtBlockFixedSlice.reducer