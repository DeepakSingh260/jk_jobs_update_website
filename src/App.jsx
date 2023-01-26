import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home'
import Post from './assets/pages/post'
import reactLogo from './assets/react.svg'
// import './App.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:post' element={<Post />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
