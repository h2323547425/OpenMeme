import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleMode = () => {
        setIsDark((mode) => !mode);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
