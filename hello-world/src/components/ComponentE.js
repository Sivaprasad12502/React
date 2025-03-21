import React, { Component } from "react";
import ComponnetF from "./ComponnetF";
import UserContext from "./userContext";

export class ComponentE extends Component {
    static contextType=UserContext
  render() {
    return (
      <div>
        Componennt E context {this.context}
        <ComponnetF />
      </div>
    );
  }
}

export default ComponentE;
