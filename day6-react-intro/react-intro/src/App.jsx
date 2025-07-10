// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import logo from '/logo.svg'
let title = "MySite";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import './App.css'
{title = prompt("Enter Site Name: ")};
if(title == ""){
  title = "MySite";
}
function App() {

  return (
    <>
      <Navbar title = {title}/>
      <Hero title = {title}/>
      <About/>
    </>
  )
}

export default App
