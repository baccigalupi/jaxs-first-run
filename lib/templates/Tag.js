import { normalizeChildren, renderChildren } from './children'
import { createDecoratedNode } from '../utilities/dom'
import { separateAttrsAndEvents } from '../utilities/object'

export default class TagTemplate {
  constructor(tagType, combinedAttributes, children) {
    this.type = tagType
    const {events, attributes} = separateAttrsAndEvents(combinedAttributes)
    this.events = events
    this.attributes = attributes
    this.children = normalizeChildren(children)
  }

  render(renderKit) {
    const dom = createDecoratedNode(
      this.type, this.attributes, this.events, renderKit
    )
    
    renderChildren(dom, this.children, renderKit)

    this.dom = dom
    return this.dom
  }
}
