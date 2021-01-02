import { isArray } from '../utilities/array'
import { cloneWithDefaults } from '../utilities/object'
import Fragment from './Fragment'

export default class AbstractTag {
  constructor(type, attributes, children) {
    this.type = type
    this.attributes = cloneWithDefaults(attributes)
    this.children = children
  }

  render({ props, document, publish, state }) {
    props = props || {}
    this.props = props
    this.renderedAttributes = this.normalizeRenderedAttributes(props)

    this.template = this.type(this.renderedAttributes)
    if (isArray(this.template)) {
      this.template = new Fragment(this.template)
    }

    return this.template.render({
      document,
      publish,
      state,
      props: this.renderedAttributes,
      children: this.children
    })
  }

  rerender({ props, document, state, publish }) {
    const newProps = {
      ...this.props,
      ...props
    }

    console.log('Re-render abstract', this.template, { props: newProps })
    return this.template.rerender({ props: newProps, document, state, publish })
  }

  normalizeRenderedAttributes(props) {
    const attributes = { children: this.children }
    for (let key in this.attributes) {
      const values = [props[key], this.attributes[key], '']
      attributes[key] = values.find((value) => value !== undefined)
    }
    return attributes
  }
}
