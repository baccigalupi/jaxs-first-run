import { normalizeChildren } from './children'

const separateAttrsAndEvents = (combined) => {
  const attributes = {}
  const events = {}

  for (let key in combined) {
    const value = combined[key]
    if (key.match(/on.+/i)) {
      const eventKey = key.slice(2).toLowerCase()
      events[eventKey] = value
    } else {
      attributes[key] = (value === undefined) ?  '' : value
    }
  }

  return {
    attributes,
    events
  }
}

const setAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

export default class TagTemplate {
  constructor(tagType, attributes, children) {
    this.type = tagType
    const normalized = separateAttrsAndEvents(attributes)
    this.events = normalized.events
    this.attributes = normalized.attributes
    this.children = normalizeChildren(children)
  }

  render({ document }) {
    document = document || window.document
    const dom = document.createElement(this.type)
    setAttributes(dom, this.attributes)

    this.dom = dom
    return this.dom
  }
}