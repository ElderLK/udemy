import React from 'react'
import Toggle from 'react-toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ThemeToggleParams {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ThemeToggle: React.FC<ThemeToggleParams> = ({ onChange }: ThemeToggleParams) => (
  <label>
    <Toggle
      className="day-night-toggle"
      icons={{
        checked: <FontAwesomeIcon inverse icon="sun" />,
        unchecked: <FontAwesomeIcon inverse icon="moon" />,
      }}
      onChange={onChange}
    />
  </label>
)

export default ThemeToggle
