import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from './store/CounterSlice'
import TodoList from './TodoList'

function AddTodo() {
const [title, settitle] = useState("")
const dispatch = useDispatch()
const handleChange = (e) =>{
settitle(e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addTodo(title))
    settitle("");
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} type="text" name="text" onChange={handleChange}/>
                <button>Add</button>
            </form>
            <TodoList />
        </div>
    )
}

export default AddTodo