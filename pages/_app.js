import '../styles/globals.css'
import { store, persistor } from '../app/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import NonSSRWrapper from '../components/NonSSRWrapper'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NonSSRWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NonSSRWrapper>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
