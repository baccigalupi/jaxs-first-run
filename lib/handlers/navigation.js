import events from '../store/events'
const event = events.store.updateLocation

const listener = (publish) => {
  return (_event) => {
    publish(event)
  }
}

export const attachHistoryListener = (publish) => {
  window.onpopstate = listener(publish)
}

export const navigate = (publish, path) => {
  history.pushState(null, '', path)
  publish(event)
} 