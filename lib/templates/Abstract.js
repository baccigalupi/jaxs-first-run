import { normalizeChildren } from './children'
import { cloneWithDefaults } from '../utilities/object'

export default class AbstractTag {
  constructor(type, attributes, children) {
    this.type = type
    this.attributes = cloneWithDefaults(attributes)
    this.children = normalizeChildren(children)
  }

  render({ props, document, publish, state }) {
    props = props || {}
    const attributes = this.normalizeRenderedAttributes(props)

    this.template = this.type(attributes)

    return this.template.render({
      document,
      publish,
      state,
      props: { ...this.attributes, ...props },
      children: this.children
    })
  }

  normalizeRenderedAttributes(props) {
    const attributes = { children: this.children }
    for (let key in this.attributes) {
      attributes[key] = props[key] || this.attributes[key] || ''
    }
    return attributes
  }
}
