import { createStore } from 'redux';

export const INCREAMENT =   'increment';
export const DECREMENT =   'decrement';
export const INCREAMENTBY5 =   'incrementBy5';
export const DECREMENTBY5 =   'decrementBy5';
export const TOGGLE =   'toggle';

const initialState = {counter: 0, showCounter: true};
const counterReducer = (state = initialState, action) => {
    if(action.type === INCREAMENT){
        return{
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === DECREMENT){
        return{
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === INCREAMENTBY5){
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === DECREMENTBY5){
        return{
            counter: state.counter - action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === TOGGLE){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    

    return state;

};

const store = createStore(counterReducer);

export default store;