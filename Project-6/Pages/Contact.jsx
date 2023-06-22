import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Contact() {
    const HandleForm=(e)=>{
        e.preventDefault();
        alert("FOR DEMO PURPOSE")

    }
    const { theme }=useContext(ThemeContext);
  return (

    <div className={`contact-div ${theme}`}>
        <h1>CONTACT</h1>
            <label>EMAIL</label><br />
            <input type="email" placeholder='ENTER THE EMAIL'/>
        <div>
        </div>
        <div>
            <label>FIRSTNAME</label><br />
            <input type="text" placeholder='ENTER THE FIRST NAME'/>
        </div>
        <div>
            <label>PASSWORD</label><br />
            <input type="password" placeholder='ENTER THE PASSWORD'/>
        </div>
        <div>
            <button onClick={(e)=>HandleForm(e)}>CONNECT ME</button>
        </div>

    </div>
  )
}

export default Contact