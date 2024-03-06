import { createContext, useContext, useState } from "react";

const TransContext = createContext();

const useLocal = () => {
    return useContext(TransContext)
};

const TransProvider = ({children}) => {

    const [local, setLocal] = useState("en");

    const localString = {
        en: {
            greeting: "hello world",
            welcome: "Welcome to my app"
        },
        hindi: {
            greeting: "Kaise hai aap",
            welcome: "Hamare app mai aapka suagat hai"
        }
    }

    // translate function
    const translate = (key) => {
        return localString[local][key]
    }

    return ( <TransContext.Provider value={{local, setLocal, translate}}>
        {children}
    </TransContext.Provider> )
}

export {TransProvider, useLocal}