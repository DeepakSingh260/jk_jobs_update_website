import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import ScrollToTop from './components/scrolltotop'
import Home from './pages/home'
import Post from './pages/post'
import './App.css'
import { AppProvider } from './context/appProvider'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <AppProvider>
          <CssBaseline />
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:post' element={<Post />}></Route>
          </Routes>
        </AppProvider>
      </HashRouter>
    </div>
  )
}

export default App
