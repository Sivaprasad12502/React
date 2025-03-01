import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("LifecycleB constuctor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount(){
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifycleB shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifycycleB getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate')
  }


  render() {
    console.log("LifeycyleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
