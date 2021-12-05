import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, getTodos } from "../store/actionCreators";
import axios from 'axios';

const Todo = () => {
    const todos = useSelector(state => state.todo.items)
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const fetchTodos = async () => {
        dispatch(getTodos());
    }

    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            completed: false,
            title
        }

        dispatch(addTodo(newTodo))
    }

    const removeTodo = (id) => {
        console.log('DELETE', id)
        dispatch(deleteTodo(id))
    }

    return (
        <div>
            <button onClick={fetchTodos}>Fetch Todos</button>

            <div>
                <form onSubmit={createTodo}>
                    <input 
                        placeholder='Enter your todo...'
                        name='todo-title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <button type='submit'>Add Todo</button>
                </form>
            </div>

            <div>
                {
                    todos ?
                    todos.map(todo => (
                        <p key={todo.id}>
                            {todo.title} - {String(todo.completed)}
                            <button onClick={() => removeTodo(todo.id)}>
                                DELETE
                            </button>
                        </p>
                    )) :
                    null
                }
            </div>
        </div>
    )
}

export default Todo;
