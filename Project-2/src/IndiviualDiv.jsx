import React from 'react'
import { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

function IndiviualDiv({ques,ans,id}) {
  const [display,setDisplay]=useState('none')
  return (
    <div className='ek'>
      <div className="ques">
        <h2>{ques}</h2>
        <BsFillPlusSquareFill size={30} color={'white'} onClick={(e) => setDisplay(display == "none" ? "display" : "none")} className='icons'/>
      </div>
        <h4 className={display}>{ans}</h4>
    </div>
  )
}

export default IndiviualDiv