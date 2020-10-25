import createBus from '../../lib/app/messageBus'

import { assert } from 'chai'

describe('message bus', () => {
  it('adds a listener and calls it when event is triggered', () => {
    const listenerCalls = []

    const bus = createBus()
    bus.subscribe('click', (payload) => {
      listenerCalls.push(payload)
    })

    bus.publish('click', 'first click')
    bus.publish('click', 'second click')

    assert.deepEqual(listenerCalls[0], 'first click')
    assert.deepEqual(listenerCalls[1], 'second click')
  })

  it('calls multiple listeners for the same event name', () => {
    const listenerCalls = []

    const bus = createBus()
    bus.subscribe('click', (payload) => {
      listenerCalls.push({message: 'first callback', payload})
    })
    bus.subscribe('click', (payload) => {
      listenerCalls.push({message: 'second callback', payload})
    })

    bus.publish('click', 'click bate')

    assert.deepEqual(listenerCalls[0], {message: 'first callback', payload: 'click bate'})
    assert.deepEqual(listenerCalls[1], {message: 'second callback', payload: 'click bate'})
  })

  it('works with regex event registration', () => {
    const listenerCalls = []

    const bus = createBus()
    bus.subscribe(/store:.+/, (payload, event) => {
      listenerCalls.push({payload, event})
    })
    
    bus.publish('store:updateAboutMeForm', 'input')
    bus.publish('store:clearCurrentUser', 'user-id')

    assert.deepEqual(listenerCalls[0], {
      payload: 'input', 
      event: 'store:updateAboutMeForm'
    })

    assert.deepEqual(listenerCalls[1], {
      payload: 'user-id', 
      event: 'store:clearCurrentUser'
    })
  })

  it('calls exact matches before fuzzy matches, regardless of subscribe order', () => {
    const listenerCalls = []

    const bus = createBus()
    bus.subscribe(/store:.+/, () => {
      listenerCalls.push('fuzzy call')
    })
    bus.subscribe('store:updateAboutMeForm', () => {
      listenerCalls.push('exact call')
    })
    
    bus.publish('store:updateAboutMeForm', 'whatever')

    assert.deepEqual(listenerCalls, ['exact call', 'fuzzy call'])
  })

  it('logs a warning when there is no match listener for an event', () => {
    const messages = []
    const bus = createBus({
      warn: (message) => messages.push(message)
    })
    bus.subscribe('click', () => {/*no-op*/})
    bus.publish('click', 'hello')
    bus.publish('clickMe', 'hello?')

    assert.deepEqual(messages, ['Event "clickMe" has no listeners'])
  })

  it('wont warn when there is a fuzzy match', () => {
    const messages = []
    const bus = createBus({
      warn: (message) => messages.push(message)
    })
    bus.subscribe(/click.*/, () => {/*no-op*/})
    bus.publish('click', 'hello')
    bus.publish('clickMe', 'hello?')

    assert.deepEqual(messages, [])
  })
})