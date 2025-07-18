import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/home',
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },

    {
      path: '*',
      element: <><NoPage/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
