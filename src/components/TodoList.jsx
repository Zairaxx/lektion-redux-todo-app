import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo} from '../redux/ducks/todoList'

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoList.todos)
    
    const handleAddTodo = () =>{
        let title = document.querySelector("#todoTitle").value;
        let description = document.querySelector("#todoDesc").value;
        let todo = {
            title:title,
            desc:description
        }
        dispatch(addTodo(todo))
    }

    const handleRemoveTodo = (title) => {
        dispatch(removeTodo(title))
    }

    return (
        <div>
            <ul>
                {todos.map(todo => {
                return (
                    <div onClick={() => {handleRemoveTodo(todo.title)}} style={{border:"1px solid white"}}>
                        <p>{todo.title}</p>
                        <p>{todo.desc}</p>
                    </div>)
                    })}
            </ul>
            <br/>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle"/>
            <label htmlFor="todoDesc">Description</label>
            <input type="text" id="todoDesc"/>
            <button onClick={handleAddTodo}>Add todo</button>
        </div>
    )
}

export default TodoList
