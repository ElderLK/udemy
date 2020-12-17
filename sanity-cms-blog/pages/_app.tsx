import { AppProps } from 'next/app'
import ThemeProvider from 'providers/theme-provider'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faSun, faMoon, faBorderAll, faList, faSortNumericDown, faSortNumericUp)

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/darcula.css'
import 'react-toggle/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
