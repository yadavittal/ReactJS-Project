import React, { useState } from 'react'

function Votecount() {

    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    // const[counts,setCounts]=useState([0,0,0])

  return (
    <div className='countContainer'>
         <h1>Voting System</h1>
         <div className='countOne'>
               <h2>Party A: {count} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount(count+1)
               }}>Vote for Party A</button>
         </div>
         <div className='countTwo'>
               <h2>Party B: {count1} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount1(count1+1)
               }}>Vote for Party B</button>
         </div>
         <div className='countThree'>
               <h2>Party C: {count2} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount2(count2+1)
               }}>Vote for Party C</button>
         </div>
    </div>
  )
}

export default Votecount;
