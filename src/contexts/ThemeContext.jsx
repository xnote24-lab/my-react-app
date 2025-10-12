import React, { createContext,useState, useEffect} from "react";
//1 create context
export const ThemeContext = createContext ({
    theme:"light",
    toggleTheme: () => {}
});
// 2 provider component
export function ThemeProvider({children}){
    const [theme,setTheme] = useState("light");
    // load theme from localStorage on mount
    useEffect(() =>{
        try{
            const saved = localStorage.getItem("theme");
            if(saved) setTheme(saved);
        }catch(e){
            // ignore localStorage errors (e.g., private mode)
        }
    },[]);
    // persist when theme changes
    useEffect(() =>{
        try{
            localStorage.setItem("theme",theme);
        }catch(e){

        }
    },[theme]);

    function toggleTheme(){
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
//Why this works - createContext creates the shared context object.
//ThemeProvider wraps parts of your app and provides { theme, toggleTheme }.
//We persist to localStorage so theme remains after reload.
}
