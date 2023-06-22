import Navbar from '../Components/Navbar'
import Contact from '../Pages/Contact'
import Feed from '../Pages/Feed'
import Home from '../Pages/Home'
import { ThemeProvider } from '../context/ThemeContext'
import './App.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
  return(
      <ThemeProvider>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Feed/>} path='/feed'/>
          <Route element={<Contact/>} path='/contact'/>
        </Routes>
      </Router>
      </ThemeProvider>
)
}

export default App
