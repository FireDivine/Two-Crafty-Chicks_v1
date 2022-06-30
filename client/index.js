import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('app')
  )
})
