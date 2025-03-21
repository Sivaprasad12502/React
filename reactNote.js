// what is React?

/*

Open source library for building use interfaces

Not a framework

Focus on UI

Rich ecosystem

Why learn REacht?

Created and maintained by facebook

Huge community

Component Base architecture///////

         HEADER


    SIDENAV  MAIN CONTENT

        FOOTER
         


Reusable code

React is declarative 

Tell React what you want and react will buid the actual UI

React will handle efficiently updating and rendering of the components

DOM updates are handles gracefully in React.

More on why React?

Seamlessly integrate react into any of you applications.

Portion of your  page or a complete page or even anentre application itself.

React natiove for mobile applications


//// Prerquistites

HTML, css and javaScript fundamentals

ES6

JavaScript-'this' keyword,filter, map and reduce



Create-react-app


npx 

npx create-react-app <project_name>

npm package runner


npm

it will installed globally

npm install create-react-app -g
creat-react-app<project_name>


react Components

header,sidenav,main content, sidenav, footer

conponent also contain components


component types

stateless functional component 

javascript functions



stateful class component

class extending component class Render method returing HTML

components Summary

components describe a part of the user interface
They are re-usable and can be nested inside other components 


functional components
*simple functions
*use func components as much as possible
Absence of 'this' keyword
solution without using state
Mainly resposible for the UI
Stateless/Dump/Presentational

Class Components

More featurerich
Maintain their own private data-state
complex UI logic
Provide lifecycle hooks

Properties(props)

Hooks

hoods are a new feature proposal that lets you use stat and other react Features without writing a class.
*No breaking changes.

JSX

javascript XML (jsx) Extension to the javaScript language syntax.
Write Xml-like code for elements and components.
jsx tags have a tag name, attributes,and children.
jsx is not a nexxessity to write Eact applications.
jsx makes your eact coe simpler and elegant.
jsx utimately transpiles to pure javaScript which is understood by the browsers.

ES6 class

HTMl(JSX)

JSX differences

class-> className
for->htmlFor

camelCase property naming conversion
onclick->onClikc
///

Props vs state  vs state

props

props get passed to the component

functional parameters

props - functional components

this.props-class Components

state

state is managd within the component

variables declared in the function body

state can be changed

useState Hook-functional components

this.state-class components

//////

setState

always make use of setState and never modify the state directly.

code has to be executed after the state has been updaed? Place that code in the call back function which is the second argument to the setState method.
 when you have to update state based on the previous state value, pass in a function as an argument instead of the rgular object.


Conditional Rendering

if/else
element variables
ternary conditional operator
short circuit operator

////////eg////////

import React, { Component } from "react";
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return this.state.isLoggedIn && <div>Welcom Vishwas</div>
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message
    // if(this.state.message){
    //     message=<div>welcome Vishwas</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Vishwas</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>welcome Guest</div>

    //   </div>
    // )
  }
}

export default UserGreeting;
//////////


List and keys

list without key attribute

<ul>
 <li>Bruce</li>
 <li>clark</li>
</ul>

list with keys

<ul>
 <li key="1">Bruce</li>
 <li key="2">clark="2"</li>
</ul>

 A "key" is a special string attribute you need to include when creating lists of elements.
 Keys give the elements a stable identity.
 keys help React identify which items have changed, are added, or are removed.
 Help in efficient update of the user interface

 index as key anti-patternf

 when to use index as a key?
  the items in your list do not have a unique id.
  the list is a static list and will not change.
  this list will never be recordered or filtered.


  Styling React Componennts
 
  css stylesheets
  inline styling
  css modules
  css in js libaries

  Controlled components

  LIfecycle Methods
  mounting[methods=constructor, static, getDerivedstateFromProps,render and component DidMount]
  whe an instance of a component is being created and inserted into the Dom
  updating[static getDerivedStateFromProps,shouldComponentUpdate,render,getsnapshotBeforeUpdate and compponentDidUpdate]
  when a component is being re-rendered as a rsult of changes to either its props or state
  unmounting[componentWillUnmount]
  when a component is being removed from the DOM
  Error handling[static getDeriverdfromerror and compeonentDidCatch]
  when there is an error during redering, in a lifecycle mehtod,or in the constructor of any child component


  Mounting Lifecycle Mehods

  constructor(props)
  a special function that will get called whenever a new component is created
  initializing state 
  Binding the event handleers
  Do not cause side effets, ex:Http requests
  super(props)
  Directly overwrite this.state


  Staic GetDerivedStateFromProps(prps,state)

  when the state of the ocmponint depends on changes in props over time.
  Set the state
  Do not cause side effects.Ex:http reuqests

  Render()
  only required method
  Read props & state and return jsx
  do not change state or interact with DoM or make ajax calls.

  childeren components lifecycle methods are also
  executed.

  componentDidMount()
  invoked immediatel after a component and all its childern components have bee redered to the DOM
  cause side effects.Ex: interact with the Dom or perform any ajax calls to load data.


  updating lifecycle methods

  static getDerivedStateFromProps(props,state)
  Method is called every time a component is re-rendered
  Set the state
  Do not cause side effects. Ex:HTTP requests


  shouldcomponentUpdate(nextProps,nextState)
  dictates if the component should re-render or not
  Performance optimization
  Do not cause side effects. Ex:HTTP reuests Calling the setState method

  reder()
  Only required mthod
  Read props & State and return jsx
  Do not change state or interact with DOM or make ajax calls.

  GetSnapShotBeforeUpdate(prevprops,prevState)
  called right before the changes from the virtual DOM are to be reflected in the DOM
  capture some ivormation from the DOM
  Mehod will either return null or return a value. Returned value will be passed as the third parameter to the next method.

  componentDidUpdate(prevProps,prevState,snapshot)
  Called after the render is finisehd in the re-render cycles
  Cause side effects

  Unmounting Phase Mehod
  
  componentWillUnmount()
  Method is invoked immediately before a component is unmounted and destroyed.
  cancelling any network requests,removing event handlers, cancelling any subscriptions and also invalidating timers.
  Do not call the setStae method.

  Error handling Phase Mthods

  Static getDerivedStaeFromError(error)
  componintDidCathc(erro,info)

  wehn there is an error either during rendering, in a lifecyele method, or in the constructor of any chid component.


  regular Component

  a regular component does not implement the shouldComponentUpdate method. id always returns ture by default.

  Pure component
  
  A pure component on the other hand implements shouldComponentsUpdate with a shallow props and state comparson.

  shallow comparison (sc)

  Primitive types
  a(sc)b returns ture if a and b have the same value and are of the same type 
  Ex:String 'Vishwas'(sc)String 'Vishwas'returns true

  Complex Types
  A(sc)b returns true if a and b reference the exact same object.

  var a =[1,2,3]
  var b=[1,2,3]
  var c =a 

  var ab_eq=(a===b) // false
  var ac_eq=(a===c)// true

  Pure Component

  A pure component implements shouldComponentUpdate with a shallow prop and state comparison

  SC of prevState with currentState
  SC of prevProps with currentProps
                          ther is a difference the component will re-render
  
  Error Handling Phase Methods
  
  static getDerivedStateFrom Error(error)
  
  componentDidCatch(error,info)

  Error Boundary
  A Class component that implements either one or both of the lifeycycle mehtods GetDierivedStateFrmError or componentDidCatch becomes an error boundary.

  The Static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is user to log the error infromation.

  Summary
  Error boundaries are React components that cathc javascript error in their child component tree, log those error, and display a fall-back Ui.

  A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCathc lifecycle methods.

  the Placement of the Error boundary also matters as it controls if the entire app should have the fall-bac Ui or just the component causing the problem.

  Why Higher order Components?

  To share common functionality between components
dfsdfsd
  HIgher order components - Hoc

  A Pattern wher a function takes a compoent as an argument and returns a new component.

  Const NewComponent=higherOrderComponent( originalComponent)
  const enhancedComponent=higherOrdercomponent(orginalComponent)

  eg:: const IroanMan=withSuit(TonyStark)
  

  Render props

  the term "render prop" refers to a technique for sharing code bewtween react compoents using a prop whose value is a function.

  ////Context/////

  context provides a wa to pass data through the compeonent tree without having to passs props down manually at every level.

  Context steps

  1.Create the context
  2.Provide a context value
  3.consume the context value


  React and HTTP

  What are hooks?

  hooks are a new feature additon in REact version 16.8 which allow you to use React features without having to 
  write a class.

  Ex:State of a component

  Hooks don't work inside classes

  Why hooks?

  reseon set 1

  understand how this keyword works in javaScript
   remember to bind event handlers in class components
   classes don't minify very well and make hot reloading very unreliable

  reason set 2

  There is no particular way to reuse staeful component logic 
  HOC and render props patterns do address this problem
  maeks the cod eharder to follow
  There is need a to share stateful logic in a better way

  reason set 3

  create componets for complex scenarios such a date fetching and subscribing to events related code is not organized in one place


  ex: Data fetching - in componentDidMount and componentDidUpdate
  ex:Event listeneres - in componentDidMount and componentWillUnmount

  Because of stateful logic- Cannot break components into smaller ones
  

  NOteWorthy POints

  REact version 16.8 or higher
  completely opt in
  Hooks don't contain any breaking changes and the release in 100% backwards-compatible.
  classes won't be removed from react 
  cant use hooks inside of a class component
  hooks don't replace your existing knowledge of React concepts
  instead,hooks provide a more direct API to the React concepts you already know

  Summary 
  hooks are a new feature addition in React version 16.8
  they allow you to use React features without having to write a class
  Avoid the whole confusion with 'this' keyword 
  Allow you to re use stateful logic
  organize the logic inside a component inoto reusable isolated units


  Rules of Hooks

  "only call hooks inside loops, conditions, or nested functions"

  "Only call Hooks from React Functions "

   Call them from within React functional components and not just any regular javaScript function



   Summary -useState

   the useState hook lets you add state to functional components
   In classes, the state is always an object.
   With the useState hook, the state doesn't have to be an object
   The useState hook return an array with 2 elements
   The first elements is the current value of the state, and the second elements is a state setter function

   When dealing with objects orarrays, always make sure to spread your state variable and then call the setter function


   useEffect
   
   The Effect Hook lets you perform side effects in functional components
   it is a close replacement for componentDidMount,
   componentDidUpdate and componentWillUnmount
   


   Context

   contxt provides a way to pass data through the component tree without having to pass props down manually at every level.


   useRducer

   useRducer is a hook that is user for stat management
   Is is an alternative to useSTate

  
        

   Hooks s far

   UseState-state
   useEffec-side effects
   useContext-context Api
   useReducer-reducers

   reduce vs useReducer

   reduce in javaScirpt

   arr.reduce(reducer,initialValue)
   singleValue=reducer(accumulator,itemValue)
   reduce method return  single value

   useReducer in react

   useReducer(reducer,initialState)
   newState=reducer(currentState,action)
   useREducer Returns a pair of values.
   [newState,dispatch]

   useReducer Summary

   useReducer is a gook that is used fro state management in React
   useREducer is related to reducer functions 
   useReducer(reducer,initialState)
   reducer(currentState,action)

   useReducer with useContext
   useReducer-Local state management
   Share state between components- Blobal state management
   userReducer + UseContext


   useState vs useReducer

   Scenartio             useState                 useReducer

   type of state     Number,String,Boolean        object or Array
   Number of state    transition One or Two          Too many
   Related state transitions  No                         yes
   Business logic             No business logic          Complex business logic
   Local vs global           local                     Global
   
*/
