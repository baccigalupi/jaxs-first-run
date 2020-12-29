import { isArray, ensureArray } from '../utilities/array'
import TextTemplate from './Text'

/* three options for children
  1. there is no view
  2. view is an array, recurse
  3. view is a renderable thing
*/
const recursiveRender = (children, renderKit, rendered = []) => {
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

export default class Children {
  constructor(jsxChildren) {
    this.collection = ensureArray(jsxChildren).map(replaceTextNodes)
  }

  render(renderKit) {
    this.dom = recursiveRender(this.collection, renderKit)
    // const domString = this.dom.map((element) => element.outerHTML).join('')
    // console.log('in children render', {dom: domString, renderKit})

    return this.dom
  }

  rerender(renderKit) {
    // console.log('in children re-render', {renderKit})
    /*
      1. if the children are identical, no-op
      2. child has changed: re-render
      3. child has been removed: remove from dom
      4. child is added, render
    */
  }

  renderIntoParent(parentNode, renderKit) {
    this.render(renderKit).forEach((dom) => {
      parentNode.append(dom)
    })
  }
}


