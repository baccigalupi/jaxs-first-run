import { isArray, ensureArray } from '../utilities/array'
import TextTemplate from './Text'

/* three options for children
  1. there is no view
  2. view is an array, recurse
  3. view is a renderable thing
*/
export const recursiveRender = (children, renderKit, rendered = []) => {
  return children
    .reduce((aggregate, view) => {
      if (!view) return aggregate

      if (isArray(view)) {
        const dom = recursiveRender(view, renderKit, aggregate)
        return dom
      }

      aggregate.push(view.render(renderKit))
      return aggregate
    }, rendered)
    .flat()
}

export class Children {
  constructor(jsxChildren) {
    this.collection = ensureArray(jsxChildren).map(replaceTextNodes)
  }

  render(renderKit) {
    this.dom = recursiveRender(this.collection, renderKit)
    return this.dom
  }

  renderIntoParent(parentNode, renderKit) {
    this.render(renderKit).forEach((dom) => {
      parentNode.append(dom)
    })
  }
}

export const renderIntoParent = (parentNode, childViews, renderKit) => {
  recursiveRender(childViews, renderKit).forEach((dom) => {
    parentNode.append(dom)
  })
}

/* for rerender
  1. if the children are identical, no-op
  2. child has changed: re-render
  3. child has been removed: remove from dom
  4. child is added, render
*/

export const normalizeChildren = (children) => {
  return ensureArray(children).map(replaceTextNodes)
}

const replaceTextNodes = (child) => {
  if (isTextNode(child)) {
    return textNode(child)
  }

  return child
}

const isTextNode = (child) => {
  return typeof child === 'string' || typeof child === 'number'
}

const textNode = (content) => {
  return new TextTemplate(content)
}

export default Children
