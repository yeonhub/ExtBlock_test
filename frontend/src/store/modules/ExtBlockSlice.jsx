import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// redux 초기값
const initialState = {
    ExtBlockFixed: [],
    ExtBlockCustom: [],
    ExtBlockCustomTemp: [],
    isPopup: false
}

// 고정 확장자 API
export const getExtBlockFixed = createAsyncThunk(
    'ExtBlock/getExtBlockFixed',
    async () => {
        const res = await axios.get(`http://54.180.1.63:3000/ExtBlock/ExtBlockFixed`)
        return res.data
    }
)
// 커스텀 확장자 API
export const getExtBlockCustom = createAsyncThunk(
    'ExtBlock/getExtBlockCustom',
    async () => {
        const res = await axios.get(`http://54.180.1.63:3000/ExtBlock/ExtBlockCustom`)
        return res.data
    }
)
// 고정 확장자 check 변경 API
export const putExtBlockFixedChk = createAsyncThunk(
    'ExtBlock/putExtBlockFixedChk',
    async (obj) => {
        const id = obj.id
        const res = await axios.put(`http://54.180.1.63:3000/ExtBlock/ExtBlockFixed/${id}`, obj)
        return obj;
    }
)
// 커스텀 확장자 추가 API
export const addExtBlockCustom = createAsyncThunk(
    'ExtBlock/addExtBlockCustom',
    async (extension) => {
        const newCustom = extension.inputValue
        const res = await axios.post(`http://54.180.1.63:3000/ExtBlock/ExtBlockCustom/${newCustom}`);
        return extension;
    }
)
// 커스텀 확장자 삭제 API
export const delExtBlockCustom = createAsyncThunk(
    'ExtBlock/delExtBlockCustom',
    async (id) => {
        const res = await axios.delete(`http://54.180.1.63:3000/ExtBlock/ExtBlockCustom/${id}`, id)
        return id;
    }
)
// 모두 보기 popup toggle
export const togglePopup = () => {
    return {
        type: 'ExtBlock/togglePopup',
    }
}

export const ExtBlockFixedSlice = createSlice({
    name: 'ExtBlock',
    initialState,
    reducers: {
        // 모두 보기 popup toggle
        togglePopup: (state) => {
            state.isPopup = !state.isPopup;
        },
    },
    extraReducers: (builder) => {
        builder
            // 고정 확장자 redux 저장
            .addCase(getExtBlockFixed.fulfilled, (state, action) => {
                state.ExtBlockFixed = action.payload
            })
            // 커스텀 확장자 redux 저장
            .addCase(getExtBlockCustom.fulfilled, (state, action) => {
                state.ExtBlockCustom = action.payload
            })
            // 고정 확장자 check 상태 redux 수정
            .addCase(putExtBlockFixedChk.fulfilled, (state, action) => {
                const { id, currentChk } = action.payload;
                const item = state.ExtBlockFixed.find(item => item.id === id);
                if (item) {
                    item.isChecked = currentChk;
                }
            })
            // 커스텀 추가 확장자 redux 저장
            .addCase(addExtBlockCustom.fulfilled, (state, action) => {
                const { id, inputValue } = action.payload;
                let newCustom = {
                    id: id,
                    extension: inputValue,
                    isChecked: false
                }
                state.ExtBlockCustom.push(newCustom);
            })
            // 커스텀 확장자 삭제 redux 삭제
            .addCase(delExtBlockCustom.fulfilled, (state, action) => {
                const id = action.payload;
                state.ExtBlockCustomTemp = state.ExtBlockCustom.filter(item => item.id === id);
                state.ExtBlockCustom = state.ExtBlockCustom.filter(item => item.id !== id);
            })
    }
})

export default ExtBlockFixedSlice.reducer