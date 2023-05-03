import React, { useState } from 'react';

// Define your themes
const themes = {
    light: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    dark: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
};

// Create a context with the default theme set to light
export const ThemeContext = React.createContext(themes.light);

// Wrap your app with the ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    // Define a function to toggle between light and dark mode
    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
