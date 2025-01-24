import { createContext, useState } from 'react'

// Create Context
export const ThemeContext = createContext()

// Provide Theme Context to your app
export const ThemeProvider = ({ children }) => {
   // Initialize the theme state, default to light mode
   const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preferences
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark
  })

  // Toggle theme and save it to localStorage
  const toggleTheme = () => {
    console.log("Current Theme:", isDarkMode)
    const newTheme = !isDarkMode ?  'dark' : 'light' 
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', newTheme)
  }

  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
