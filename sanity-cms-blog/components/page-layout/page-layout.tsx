import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'components/navbar/navbar'
import Head from 'next/head'
import { useTheme } from 'providers/theme-provider'

type PageLayoutProps = {
  className: string
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }: PageLayoutProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={theme.type}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={['page-wrapper', className].join(' ')}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {' | '}
            <a href="#">github</a>
            {' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
      <style jsx global>{`
        html,
        body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transiction: color 0.2s easy-out, background 0.2s easy-out;
        }
      `}</style>
    </div>
  )
}

export default PageLayout
