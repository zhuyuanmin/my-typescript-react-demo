import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import store from '@/store'
import './App.{{suffix}}'
import axios from 'axios'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'

// polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

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

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
