import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function TodoList() {
const state = useSelector(state => state.todolist)
const dispatch = useDispatch()
console.log(state)
// const handleDelete = () =>{
//     dispatch()
// }
    return (
        <>
           {state.map((todo)=>(
           <div key={todo.id}>{todo.title}
           {/* <button type="submit" onClick={()=>handleDelete(id)}>X</button> */}
           </div>              
    ))} 
        </>
    )
}

export default TodoList

