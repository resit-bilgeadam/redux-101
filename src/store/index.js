import { createStore, combineReducers, applyMiddleware } from "redux";
import { DECREMENT, RESET, INCREMENT, ADD_TODO, DELETE_TODO, SET_TODOS } from "./types";
import thunk from "redux-thunk";

const INITIAL_COUNTER_STATE = {
    count: 0
}

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
    switch (action.type) {
        case DECREMENT:
            return {count: state.count - 1};

        case RESET:
            return {count: 0};

        case INCREMENT:
            return {count: state.count + 1};
    
        default:
            return state;
    }
}

const INITIAL_TODO_STATE = {
    items: []
}

const todoReducer = (state = INITIAL_TODO_STATE, action) => {
    switch (action.type) {
        case SET_TODOS:
            return { items: action.payload };

        case ADD_TODO:
            return { items: [...state.items, action.payload] };

        case DELETE_TODO:
            return { items: state.items.filter(item => item.id !== action.payload) }
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/*
{
    count: 0
}

Combine Reducer sonucunda stateimizin son hali bu şekilde olacak
{
    counter: {
        count: 0
    },
    todo: {
        items: [...]
    }
}
*/