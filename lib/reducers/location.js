import events from '../store/events'
import { createReducer } from '../store/reducerUtilities'

const normalizeHash = (hash) => {
  return hash[0] === '#' ? hash.slice(1) : hash
}

const queryParams = (queryString) => {
  return queryString
    .replace(/^\?/, '')
    .split('&')
    .reduce((aggregate, pairString) => {
      if (!pairString) return aggregate

      const pair = pairString.split('=')
      aggregate[pair[0]] = pair[1]
      return aggregate
    }, {})
}

const dataFromLocation = () => {
  const { hash, pathname, search } = location
  return {
    hash: normalizeHash(hash),
    path: pathname,
    queryParams: queryParams(search)
  }
}

export default createReducer(events.store.updateLocation)
  .initialState(() => dataFromLocation())
  .transform(() => dataFromLocation())
