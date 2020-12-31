import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './CounterSlice'

const store = configureStore({
    reducer: todoReducer
})
export default store