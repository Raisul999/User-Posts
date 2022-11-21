import '../styles/globals.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import NonSSRWrapper from '../components/NonSSRWrapper'

const MyApp=({ Component, pageProps })=> {
  return (
    <Provider store={store}>
      <NonSSRWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NonSSRWrapper>
    </Provider>
  )
}

export default MyApp
