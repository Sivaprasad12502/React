import React, { Component } from 'react'
import counter from './components/counter'

class ClickCounterTwo extends Component {
    
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    )
  }
}

export default ClickCounterTwo
