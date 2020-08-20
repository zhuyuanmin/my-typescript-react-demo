import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducer'

const NODE_ENV = process.env.NODE_ENV
let store: any = null

if (NODE_ENV === 'development') {
    store = createStore(reducers, applyMiddleware(thunk, logger))
} else {
    store = createStore(reducers, applyMiddleware(thunk))
}

export default store
