import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/navbar'
import ScrollToTop from './assets/components/scrolltotop'
import Home from './assets/pages/home'
import Post from './assets/pages/post'
import './App.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <CssBaseline />
        <Navbar></Navbar>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:post' element={<Post />}></Route>
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  )
}

export default App
