import { isArray } from '../utilities/array'
import { cloneWithDefaults } from '../utilities/object'
import Children from './children'

export default class AbstractTag {
  constructor(type, attributes, children) {
    this.type = type
    this.attributes = cloneWithDefaults(attributes)
    this.children = children
  }

  render({ props, document, publish, state }) {
    props = props || {}
    const attributes = this.normalizeRenderedAttributes(props)

    // Guards for mapping a collection
    // conts List = ({items}) => items.map((item) => <Item item={item} />)
    this.template = this.type(attributes)
    if (isArray(this.template)) {
      this.template = new Children(this.template)
    }

    console.log({
      this: this,
      templateType: this.type,
      'template in Abstract': this.template
    })

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

  rerender(renderKit) {
    this.template.rerender(renderKit)
  }
}
