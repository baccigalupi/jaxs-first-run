import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import { createApp } from '../lib/jaxs'
import handlers from './handlers'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(logger))

export default createApp({handlers, store})
