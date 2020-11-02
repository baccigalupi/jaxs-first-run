import { combineReducers } from 'redux'

import location from '../../../lib/reducers/location'
import token from '../../../lib/reducers/token'

export default combineReducers({
  location,
  token
})
