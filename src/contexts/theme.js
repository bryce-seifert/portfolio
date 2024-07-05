import { createContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

function ThemeProvider ({ children })  {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeName(darkMediaQuery.matches ? 'custom' : 'custom')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    })
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  
  const contextValue = useMemo(() => [{ themeName, toggleTheme }], [themeName, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
