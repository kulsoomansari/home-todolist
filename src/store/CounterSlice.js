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
    },
    deleteTodo: {
        reducer(state, action){
        },
        prepare(id){
            return{
                payload: {
                id: {id},
            }    
          }
        }
    }
    }
})
export const {addTodo, deleteTodo} = todoSlice.actions
const todoReducer = todoSlice.reducer
export default todoReducer