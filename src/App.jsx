import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import ScrollToTop from './components/scrolltotop'
import Home from './pages/home'
import Post from './pages/post'
import './App.css'
import { AppProvider } from './context/appProvider'
import Search from './pages/search'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <AppProvider>
          <CssBaseline />
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/post/:id' element={<Post />}></Route>
            <Route path='/search' element={<Search />}></Route>
          </Routes>
        </AppProvider>
      </HashRouter>
    </div>
  )
}

export default App
