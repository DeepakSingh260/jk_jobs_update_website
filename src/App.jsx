import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import Home from './assets/pages/home'
import Post from './assets/pages/post'
import reactLogo from './assets/react.svg'
// import './App.css'

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Post></Post>
      {/* <Home></Home> */}
    </div>
  )
}

export default App
