import {useContext, createContext} from "react";

export const ThemeContext = createContext({
// variables and methods could alaso be passed here not only state
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})  


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}