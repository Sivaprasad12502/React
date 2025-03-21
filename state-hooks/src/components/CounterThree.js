import React, { act, useActionState, useReducer } from "react";
import HookCounterThree from "../HookCounterThree";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <button>Count - {count}</button>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <button>Count Two- {countTwo}</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
        <button onClick={() => dispatchTwo("decrement")}>decrement</button>
        <button onClick={() => dispatchTwo("increment")}>increment</button>
      </div>
    </div>
  );
}

export default CounterThree;
