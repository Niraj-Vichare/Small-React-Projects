import { createContext, useState } from "react";

const ThemeContext=createContext();



const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('');

    const HandleTheme=()=>{
        theme=="dark"?setTheme("light"):setTheme("dark")
        
    }
    return(
        <ThemeContext.Provider value={{theme,HandleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}
export {ThemeContext,ThemeProvider}
