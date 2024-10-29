import React, { useState } from 'react'

function Counter() {
    const [number,setNumber]=useState(0)
  return (

    <div className='container'>
           {/* <input type='number' placeholder='enter number' value={number}/> */}
           {/* <h2>Counter</h2> */}
           <div >
                 <button onClick={()=>{
                    setNumber(number+1)
                 }} >Increment</button>
                 
                 <h1>{number}</h1>

                 <button onClick={()=>{
                    setNumber(number-1)
                 }}>Decrement</button>

                 <button className='reset' onClick={()=>{
                    setNumber(number*0)
                 }}>
                 Reset
                 </button>
           </div>
    </div> 
  )
}

export default Counter
