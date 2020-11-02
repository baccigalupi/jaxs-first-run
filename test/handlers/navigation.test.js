import {
  attachHistoryListener,
  navigate
} from '../../lib/handlers/navigation'
import events from '../../lib/store/events'

import { JSDOM } from 'jsdom'
import { assert } from 'chai'

const locationEvent = events.store.updateLocation

describe('handlers navigation', () => {
  it('listens for location changes and publishes a navigation event', () => {

  })
})
