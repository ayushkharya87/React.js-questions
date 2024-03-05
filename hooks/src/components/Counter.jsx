import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1}

        case "DECREMENT":
            return { count: state.count - 1}

        case "RESET":
            return { count: 0}
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div>
        <h1>Counter app using "useReducer"</h1>

        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default Counter