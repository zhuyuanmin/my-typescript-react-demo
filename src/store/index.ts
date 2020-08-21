import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducer'

const store = process.env.NODE_ENV === 'development'
    ? createStore(reducers, applyMiddleware(thunk, logger))
    : createStore(reducers, applyMiddleware(thunk))

export default store
