import { isArray } from '../utilities/array'
import TextTemplate from './Text'

export const renderChildren = (parentNode, childViews, renderKit) => {
  renderReduceChildren(childViews, renderKit).forEach((dom) => {
    parentNode.append(dom)
  })
}

/* three options for children
  1. there is no view
  2. view is an array, recurse
  3. view is a renderable thing
*/
export const renderReduceChildren = (children, renderKit, rendered = []) => {
  return children
    .reduce((aggregate, view) => {
      if (!view) return aggregate

      if (isArray(view)) {
        const dom = renderReduceChildren(view, renderKit, aggregate)
        return dom
      }

      aggregate.push(view.render(renderKit))
      return aggregate
    }, rendered)
    .flat()
}

/* for rerender
  1. if the children are identical, no-op
  2. child has changed: re-render
  3. child has been removed: remove from dom
  4. child is added, render
*/

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
