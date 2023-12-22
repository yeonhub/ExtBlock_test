import { configureStore } from '@reduxjs/toolkit'

import ExtBlockReducer from './modules/ExtBlockSlice'

export const store = configureStore({
    reducer : {    
        ExtBlockReducer
    }
})