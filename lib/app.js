import jsx from './jsx'
import { createStore } from 'redux'
import createBus from './app/messageBus'

const configureBus = (handlers) => {
  const bus = createBus()
  handlers.forEach(({event, listener}) => {
    bus.subscribe(event, listener)
  })
  return bus
}

const configureStore = (reducers) => createStore(reducers)

const connectStore = (bus, store) => {
  const storeMatcher = /store:(.+)/
  bus.subscribe(storeMatcher, (payload, eventName) => {
    const type = eventName.match(storeMatcher)[1]
    store.disptach({
      type,
      payload
    })
  })
}

export class App {
  constructor({handlers, reducers}) {
    this.rootTemplates = []
    this.bus = configureBus(handlers)
    this.store = configureStore(reducers)
    connectStore(this.bus, this.store)
  }

  render({selector, document, Template}) {
    const template = <Template />
    this.rootTemplates.push(template)
    this.document = document || window.document
    const publish = (name, payload) => this.bus.publish(name, payload)

    const dom = template.render({
      document: this.document,
      state: this.getState(),
      publish,
    })

    this.document.querySelector(selector).append(dom)

    this.store.subscribe(() => {
      template.rerender({
        document: this.document,
        state: this.getState(),
        publish,
      })
    })
  }

  getState() {
    return this.store.getState()
  }
}

export default (configuration) => {
  return new App(configuration)
}