import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTodos} from '../store/actionCreators';

function Home() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    const lastTodo = useSelector(state => state.todo.items[state.todo.items.length - 1]);

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <h3>Count value is: {count}</h3>
            {lastTodo ? <h3>Latest Todo: {lastTodo.title}</h3> : null}
        </div>
    )
}

export default Home;
