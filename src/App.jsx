import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Category from './pages/Category'
import Login from './component/Login'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App