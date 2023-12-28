import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  };

  const incrementBy5Handler = () => {
    dispatch({type: 'incrementBy5'})
  };

  const decrementBy5Handler = () => {
    dispatch({type: 'decrementBy5'})
  };

  const toggleCounterHandler = () => {};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
