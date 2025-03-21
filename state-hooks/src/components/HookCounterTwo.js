import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCout=0
    const [count,setCount]=useState(initialCout)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCont=>prevCont+1)
        }
    }

  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(initialCout)}>Reset</button>
      <button onClick={()=>setCount(prevCont=>prevCont+1)}>Increment</button>
      <button onClick={()=>setCount(prevCont=>prevCont-1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
