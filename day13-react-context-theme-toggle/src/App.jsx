import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/context'
import ThemeToggleButton from './components/ThemeToggleButton';
import Home from './pages/Home';

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('MyFile') || 'light'
  });

  useEffect(() => {
    localStorage.setItem('MyFile', theme) 
  }, [theme])
  

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
  }

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />
      {/* <ThemeToggleButton/> */}
    </ThemeContext.Provider>
  )
}

export default App
