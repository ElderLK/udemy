import React from 'react'
import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap'
import Link from 'next/link'
import ThemeToggle from 'components/theme-toggle/theme-toggle'

interface NavbarParams {
  theme: { type: string; foreground: string; fontColor: string; background: string }
  toggleTheme: () => void
}

const Navbar: React.FC<NavbarParams> = ({ theme, toggleTheme }: NavbarParams) => {
  return (
    <NavbarBootstrap
      variant={theme.type as any}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <NavbarBootstrap.Brand className="fj-navbar-brand">
        <Link href="/">
          <a style={{ color: theme.fontColor }}>Filip-Jerga</a>
        </Link>
      </NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
      <NavbarBootstrap.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Nav.Link
            as={() => (
              <Link href="/">
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            )}
          /> */}
          <ThemeToggle onChange={toggleTheme} />
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  )
}

export default Navbar
