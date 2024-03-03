import React from 'react'
// import "./App.css"
import Login from './components/Login'
import Weather from './components/weather'
import Search from './components/Search'
import NavIcon from './components/NavIcon'
import Switch from './components/ThemeSwitch/Switch'
import Theme from './components/ThemeSwitch/Theme'
import { ThemeProvider } from './components/ThemeSwitch/Context'

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Weather /> */}
      {/* <Search /> */}
      {/* <NavIcon /> */}

      {/* ----- */}
      <ThemeProvider>
        <Switch />
        <Theme />
      </ThemeProvider>
      {/* ------ */}
      
    </div>
  )
}

export default App