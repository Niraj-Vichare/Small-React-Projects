import React, { useContext,useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'


function Home() {
  const { theme }=useContext(ThemeContext);

  return (
    <div className={`home-div ${theme}`}>
        <h1>HOME PAGE</h1>  
        <div className="para">
            <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quo reiciendis odio, nesciunt animi harum ducimus fuga et officia asperiores totam commodi? Ex itaque quisquam totam iure. Soluta qui maxime sint itaque.
            </h2>
            <button>CLICK ME</button>
        </div>
    </div>
  )
}

export default Home