import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from '@/store/store'
import './App.less'
import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 15000,
})

service.interceptors.request.use(function (config) {
  return config
})

service.interceptors.response.use(function (config) {
  return config
})

Object.assign(window, { service })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
