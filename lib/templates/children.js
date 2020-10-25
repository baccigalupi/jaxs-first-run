import { isArray } from '../utilities/is'
import TextTemplate from './Text'

export const renderChildren = (parentNode, childViews, renderKit) => {
  childViews.forEach((view) => {
    const childDom = view.render(renderKit)
    parentNode.append(childDom)
  })
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
