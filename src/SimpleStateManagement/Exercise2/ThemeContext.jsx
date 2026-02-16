import React, { createContext, useContext, useEffect, useState } from "react";

// ThemeContext.jsx
//1.
const ThemeContext = createContext(null);
//2 .Provider
export function ThemeProvider({ children }) {
    // Manage theme and fontSize state here
    // Provide value with { theme, setTheme, fontSize, setFontSize }

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    const [fontSize, setFontSize] = useState(() => {
        return localStorage.getItem("fontSize") || "medium";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("fontSize", fontSize);
    }, [fontSize]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    // Custom hook with error handling
    // Return context value or throw error if used outside 
    const themeCtx = useContext(ThemeContext);
    return themeCtx;
}
