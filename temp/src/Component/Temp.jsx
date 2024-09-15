import React, { useState } from 'react'
import './Temp.css'
import mobile from '../Component/assets/mobile.jpg'
const Temp = () => {
  const [temp ,setTemp]= useState(12);
  
  const [color, setColor]=useState("#34495e");
    function incremet(){
        setTemp(temp+1);
        if(temp===19){
          setColor("red");
        }
    }
  
    function decrement(){
        setTemp(temp-1);
        if(temp<=19){
            setColor("#34495e");
        }
    }
  return (
    <div className='mobile'>
       

       <div className='temp-image'>
       <img src={mobile} alt="" style={{width: "100%"}} />
       </div>
         <div className='temp-display'>
         <div className='actual' style={{backgroundColor: color}}>{temp}°C </div>
         <div className='mobile-btn'>
          <button onClick={incremet}>+</button>
          <button onClick={decrement}>-</button>
         </div>
    </div>
    </div>
  )
}

export default Temp