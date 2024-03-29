import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme((prevMode) => !prevMode)
    };

    return (
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

const useTheme = () => {
    return useContext(ThemeContext)
}

export { useTheme, ThemeProvider};