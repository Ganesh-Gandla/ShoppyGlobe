import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'
import Footer from './components/Footer'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App
