import React, { useState } from 'react'
import "../App.css"

const NavIcon = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    };

  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
            Icon
        </button>

        <ul className={`menu ${open ? "open" : "hidden"}`} >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavIcon