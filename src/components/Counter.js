import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { INCREAMENT } from '../store';
import { DECREMENT } from '../store';
import { INCREAMENTBY5 } from '../store';
import { DECREMENTBY5 } from '../store';
import { TOGGLE } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch({type: INCREAMENT})
  };

  const decrementHandler = () => {
    dispatch({type: DECREMENT})
  };

  const incrementBy5Handler = () => {
    dispatch({type: INCREAMENTBY5, amount: 5})
  };

  const decrementBy5Handler = () => {
    dispatch({type: DECREMENTBY5, amount: 5})
  };

  const toggleCounterHandler = () => {
    dispatch({type: TOGGLE})
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
