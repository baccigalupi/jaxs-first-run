import { normalizeChildren } from "./children"

const normalizeValues = (_attributes) => {
  const attributes = {..._attributes}
  for (let key in attributes) {
    const value = attributes[key]
    attributes[key] = (value === undefined) ?  '' : value
  }
  return attributes
}

const normalizeAttributes = (originalAttributes, props) => {
  const attributes = {}
  for (let key in originalAttributes) {
    attributes[key] = props[key] || originalAttributes[key] || ''
  } 
  return attributes
}

export default class AbstractTag {
  constructor(type, attributes, children) {
    this.type = type
    this.attributes = normalizeValues(attributes)
    this.children = normalizeChildren(children)
  }

  render(newProps) {
    newProps = newProps || {}
    const attributes = normalizeAttributes(this.attributes, newProps)
    const props = {...this.attributes, ...newProps}

    this.template = this.type(attributes, this.children)
    return this.template.render(props)
  }
}