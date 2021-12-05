import { DECREMENT, RESET, INCREMENT, ADD_TODO, DELETE_TODO, SET_TODOS } from "./types";
import axios from 'axios';

export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const increment = () => ({ type: INCREMENT });

export const getTodos = () => async (dispatch) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');

    dispatch({ type: SET_TODOS, payload: data });
};

export const addTodo = (item) => ({ type: ADD_TODO, payload: item });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
