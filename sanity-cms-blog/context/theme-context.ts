import React from 'react'

interface ThemeParams {
  theme: { type: string; foreground: string; fontColor: string; background: string }
  toggleTheme: () => void
}

export const themes = {
  light: {
    type: 'light',
    foreground: '#000',
    fontColor: '#2b2c38',
    background: '#f4f7f9',
  },
  dark: {
    type: 'dark',
    foreground: '#fff',
    background: '#2b2c38',
    fontColor: '#f4f7f9',
  },
}

export const ThemeContext = React.createContext<ThemeParams>({
  theme: themes.light,
  toggleTheme: () => {
    console.log('toggleTheme')
  },
})
