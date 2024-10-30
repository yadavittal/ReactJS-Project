import React, { useState } from 'react'

function Votecount() {

//     const[count,setCount]=useState(0)
//     const[count1,setCount1]=useState(0)
//     const[count2,setCount2]=useState(0)
    const[count,setCount]=useState([0,0,0])

  return (
    <div className='countContainer'>
         <h1 className='voteHeader'>Voting Machine</h1>
         <div className='countOne'>
               <h2>Party A: {count[0]} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount([count[0]+1,count[1],count[2]])
               }}>Vote for Party A</button>
         </div>
         <div className='countTwo'>
               <h2>Party B: {count[1]} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount([count[0],count[1]+1,count[2]])
               }}>Vote for Party B</button>
         </div>
         <div className='countThree'>
               <h2>Party C: {count[2]} <span>votes</span></h2>
               <button onClick={()=>{
                  setCount([count[0],count[1],count[2]+1])
               }}>Vote for Party C</button>
         </div>
    </div>
  )
}

export default Votecount;
