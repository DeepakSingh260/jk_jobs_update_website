import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Post from './pages/post'
import './App.css'
import { AppProvider } from './context/appProvider'
import Search from './pages/search'
import About from './pages/about'
import Logo from './components/logo'
import { appTheme } from './theme'

function App() {
  const theme = createTheme(appTheme)
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={theme}>

            <CssBaseline />
            <Logo />
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/post/:id' element={<Post />}></Route>
              <Route path='/search' element={<Search />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
