import React from 'react'
import { useTheme } from './Context'
import "../../App.css";

const Theme = () => {

    const { darkTheme } = useTheme();
    const themeClass = darkTheme ? "dark-theme" : "light-theme";

  return (
    <div className={`container ${themeClass}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur voluptatum veritatis excepturi incidunt sit laudantium. Quis pariatur tempore magnam vitae aut eum nisi voluptatibus quia doloribus autem inventore, maxime ex, neque, facilis aperiam error voluptatem quaerat culpa modi commodi.
    </div>
  )
}

export default Theme