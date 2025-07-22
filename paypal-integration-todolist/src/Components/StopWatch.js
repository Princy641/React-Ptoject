import React, { useState } from 'react'
import '../../src/Components/StopWatch.css'


export default function StopWatch() {
    const[time, setTime]=useState({hr:0,min:0,sec:0,mill:0});
    const[status, setStatus]=useState(0)
    

    let updateHr = time.hr;
    let updateMin = time.min;
    let updateSec = time.sec;
    let updateMill = time.mill;

    
   const start=()=>{
    myApp()
    setStatus(setInterval(myApp,100))
    } 
    const stop=()=>{
        clearInterval(status)

    }
    const reset=()=>{
        clearInterval(status)
        setTime({hr:0,min:0,sec:0,mill:0})

    }
    const myApp=()=>{
        if(updateMill==100){
            updateMill=0
            updateSec++
        }if(updateSec==60){
            updateSec=0
            updateMin++
        }if(updateMin==60){
            updateMin=0
            updateHr++
        }
        updateMill++;
        return setTime({hr:updateHr,min:updateMin,sec:updateSec,mill:updateMill})

    }
   
  return (
    <div className='StopWatchContainer'>
        <h2>STOP WATCH</h2>
        <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.mill}</h1>
        <div className='button'>
            <button className='Start' onClick={start}>Start</button>
            <button className='Stop' onClick={stop}>Stop</button>
            <button className='Reset' onClick={reset}>Reset</button>

        </div>
    </div>
  )
}
