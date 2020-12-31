import { createSlice,nanoid } from "@reduxjs/toolkit";

 const todoSlice = createSlice({
    name:'todos',
    initialState: {
        todolist: []
    },
    reducers: {
        addTodo: {
           reducer(state, action){
            state.todolist.push(action.payload)
        },
        prepare(title){
            return{
                payload: {
                id: nanoid(),
                title:title
            }    
          }
        }
    }
    }
})
export const {addTodo} = todoSlice.actions
const todoReducer = todoSlice.reducer
export default todoReducer