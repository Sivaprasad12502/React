import React, { Component } from "react";
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

//   render() {
    // return this.state.isLoggedIn && <div>Welcom Vishwas</div> // shortcircuit operator
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
//   }
}

export default UserGreeting;
