import React, { useState, ReactNode, useEffect } from 'react';
import { Theme, ThemeContext } from '../../contexts/ThemeContext/ThemeContext';


type ThemeProviderProps = {
    children: ReactNode;
  }
  
 const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    useEffect(() => {
      document.body.parentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  export default ThemeProvider