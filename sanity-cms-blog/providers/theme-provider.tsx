import React from 'react'
import { ThemeContext, themes } from 'context/theme-context'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(themes.light)

  const toggleTheme = React.useCallback(() => {
    setTheme((actualTheme) => {
      if (actualTheme.type === themes.light.type) {
        return themes.dark
      }
      return themes.light
    })
  }, [])

  const themeAPI = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    }
  }, [theme, toggleTheme])

  return <ThemeContext.Provider value={themeAPI}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)

export default ThemeProvider
