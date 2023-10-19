import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/index.js'
// import ScrollToTop from './pages/ScrollToTop.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ScrollToTop> */}

    <Provider store={store} >

      <App />
    </Provider>
    {/* </ScrollToTop> */}
  </React.StrictMode>,
)
