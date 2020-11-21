import { createStore } from 'redux'

import createApp from '../lib/app'
import handlers from './handlers'
import reducers from './reducers'

const store = createStore(reducers)

export default createApp({handlers, store})