import Layout from '../components/layout'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {} from '../actions/asyncActions'

import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </Provider>
  )
}
