import React, { useEffect, useState } from 'react'

function CountTimer() {
    
    const [timer, setTimer] = useState(59);
    useEffect(() => {
        let t = setInterval(() => {
            setTimer(upTimer => upTimer > 0 ? upTimer - 1 : 60);
        }, 1000)
       
    return () => clearInterval(t);
    }, [])
    
    return (
        <>
            <div className='countTimer'>
                <h1 className='header'>Countdown Timer:</h1>
                <p>{timer}</p>
            </div>
        </>
    )
}

export default CountTimer
