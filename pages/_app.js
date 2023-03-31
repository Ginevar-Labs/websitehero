import '../styles/globals.css'
import '../styles/navbar.scss'
import '../styles/globals.scss'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { CookiesProvider } from 'react-cookie';

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#75325B',
      error: '#FCC5D8',
      background: '#1E1D1D'
    },
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
        <NextUIProvider theme={theme}>
            <Component {...pageProps} />
        </NextUIProvider>
    </CookiesProvider>
  )
}

export default MyApp
