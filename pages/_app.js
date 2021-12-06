import Layout from '../components/layout'
import { Provider } from "react-redux";
import store from "../redux/store";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { checkAuthentication } from "../actions/asyncActions"


import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

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

  checkAuthentication();
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