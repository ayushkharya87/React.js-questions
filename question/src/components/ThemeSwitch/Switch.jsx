import React from 'react'
import { useTheme } from './Context'

const Switch = () => {

    const { darkTheme, toggleTheme } = useTheme();
    
  return (
    <div>
        <input type="checkbox" checked={darkTheme} onChange={toggleTheme}/>
    </div>
  )
}

export default Switch