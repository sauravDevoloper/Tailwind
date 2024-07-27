import React, { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './TailwindCss/Pages/LandingPage'

const App = () => {
  const [theme,setTheme] = useState('light')

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])



  const handleThemchange = ()=>{
    setTheme(theme ==="light"?"dark":"light")
  
  }













  return (
    <div>

  <LandingPage change ={handleThemchange}/>  
  </div> 

    
  )
}

export default App