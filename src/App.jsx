import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const myroute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
