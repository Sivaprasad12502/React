import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DateFetchingTwo from "./components/DateFetchingTwo";

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState: count,countDispatch:dispatch }}>
      <div className="App">
        {/* Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <DataFetchingOne/> */}
        <DateFetchingTwo/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
