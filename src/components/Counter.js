import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5(5));       // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementBy5(5))
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>IncrementBy5</button>
        <button onClick={decrementBy5Handler}>DecrementBy5</button>
      </div>
    </main>
  );
};

export default Counter;
