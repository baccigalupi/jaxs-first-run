import { isArray } from '../utilities/is'
import TextTemplate from './Text'

export const renderChildren = (parentNode, childViews, renderKit) => {
  renderReduceChildren(childViews, renderKit)
    .forEach((dom) => {
      parentNode.append(dom)
    })
}

export const renderReduceChildren = (children, renderKit, rendered = []) => {
  return children.reduce((aggregate, view) => {
    if (!view) return aggregate
    
    if (isArray(view)) {
      const dom = renderReduceChildren(view, renderKit, aggregate)
      return dom
    }

    aggregate.push(view.render(renderKit))
    return aggregate
  }, rendered).flat()
}

export const normalizeChildren = (children) => {
  return ensureArray(children).map(normalizeContent)
}

const normalizeContent = (child) => {
  if (isTextNode(child)) {
    return textNode(child)
  }

  return child
}

const ensureArray = (children) => {
  if (isArray(children)) {
    return children
  }

  if (!children) {
    return []
  }

  return [children]
}

const isTextNode = (child) => {
  return typeof child === 'string' || typeof child === 'number'
}

const textNode = (content) => {
  return new TextTemplate(content)
}
