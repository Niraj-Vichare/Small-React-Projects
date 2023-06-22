import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
    const {theme,HandleTheme}=useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/feed/'>FEED</Link></li>
      <li><Link to='/contact/'>CONTACT</Link></li>   
      <button onClick={HandleTheme}>{theme=='dark'?"DARK":"LIGHT"}</button>
    </nav>
  )
}

export default Navbar