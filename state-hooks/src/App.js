import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./IntervalClassCounter";
import IntervalHookCounter from "./IntervalHookCounter";
import DataFetching from "./DataFetching";
import ComponentC from "./components/ComponentC";
import React from "react";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      <CounterThree/>
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour/> */}
    </div>
  );
}

export default App;
