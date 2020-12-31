import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from './store/CounterSlice'
import TodoList from './TodoList'

function AddTodo() {
const dispatch = useDispatch()
const [title, settitle] = useState()
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
                <input value={title} type="text" name="title" onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
            <TodoList />
        </div>
    )
}

export default AddTodo