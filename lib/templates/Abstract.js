import { normalizeChildren } from "./children"

const normalizeValues = (_attributes) => {
  const attributes = {..._attributes}
  for (let key in attributes) {
    const value = attributes[key]
    attributes[key] = (value === undefined) ?  '' : value
  }
  return attributes
}

const normalizeAttributes = (originalAttributes, props, children) => {
  const attributes = {children: children}
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

  render({document, props, publish}) {
    props = props || {}
    const attributes = normalizeAttributes(
      this.attributes,props, this.children
    )

    this.template = this.type(attributes)

    const node =  this.template.render({
      document,
      publish,
      props: {...this.attributes, ...props},
      children: this.children
    })

    return node
  }
}