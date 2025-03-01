import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import { Component, PureComponent } from "react";
import Counter from "./components/counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/classClick";
import EvendBind from "./components/evendBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import style from "./appStyle.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FramgmentDemo from "./components/FramgmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter/>
        <HoverCounter/>
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="SuperMan"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker"></Hero>
        </ErrorBoundary> */}

        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FramgmentDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1>
        <Inline/> */}
        {/* <StyleSheet primary={false}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <FunctionClick/>
        <ClassClick/>
        <EvendBind/> */}

        {/* <Counter/> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman"> */}
        {/* <p>This is children props</p> */}
        {/* </Greet> */}
        {/* <Greet name="Wayne" heroName="superman"/> */}
        {/* <Greet name="Diana" heroName="Wonder Woman"> */}
        {/* <button>Action</button> */}
        {/* </Greet> */}
        {/* <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Wayne" heroName="superman"/> */}
        {/* <Welcome  name="Diana" heroName="Wonder Woman"/> */}
        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
