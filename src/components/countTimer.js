import React, { useEffect, useState } from 'react'

function CountTimer() {

    const [timer, setTimer] = useState(59);
    useEffect(() => {
        let timer = setInterval(() => {
        setTimer(time => time > 0 ? time - 1 : 59);
        }, 1000)
        //  console.log(t);
    return () => clearInterval(timer); // code cleanup
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
