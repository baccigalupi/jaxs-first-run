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
    // Guards for mapping a collection
    // conts List = ({items}) => items.map((item) => <Item item={item} />)
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
    const renderedAttributes = this.normalizeRenderedAttributes(props)
    const newProps = {
      ...props,
      ...renderedAttributes
    }

    // if (props === this.props) no-op
    //

    console.log('Abstract re-render', this.template, { props: newProps })
    this.template.rerender({ props: newProps, document, state, publish })
  }

  normalizeRenderedAttributes(props) {
    const attributes = { children: this.children }
    for (let key in this.attributes) {
      attributes[key] = props[key] || this.attributes[key] || ''
    }
    return attributes
  }
}
