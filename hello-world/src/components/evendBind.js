import React, { Component } from 'react'
import message from './Message'

class evendBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }

    //   this.onClickHandler=this.onClickHandler.bind(this)
    }
    // onClickHandler(){
    //     this.setState({
    //         message:'goodBye'
    //     })
    //     console.log(this)
    // }
    clickHandler=()=>{
        this.setState({
            message:'Goodby'
        })

    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.onClickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.onClickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
        
      </div>
    )
  }
}
export default evendBind
