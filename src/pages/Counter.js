import {useSelector, useDispatch} from 'react-redux';
import {decrement, reset, increment} from '../store/actionCreators';

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const decrementCount = () => dispatch(decrement())
    const resetCount = () => dispatch(reset());
    const incrementCount = () => dispatch(increment());

    return (
        <div>
            <h1>Count: {count}</h1>
            
            <div>
                <button onClick={decrementCount}>- Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={incrementCount}>+ Increment</button>
            </div>
        </div>
    )
}

export default Counter;