import { isArray, ensureArray } from '../utilities/array'
import TextTemplate from './Text'

/* three options for children
  1. there is no view
  2. view is an array, recurse
  3. view is a renderable thing
*/
const recursiveRender = (children, renderKit, rendered = [], method='render') => {
  console.log('recursive child render', renderKit.props)

  return children
    .reduce((aggregate, view) => {
      if (!view) return aggregate

      if (isArray(view)) {
        const dom = recursiveRender(view, renderKit, aggregate)
        return dom
      }

      console.log('recursive render of', view)
      aggregate.push(view[method](renderKit))
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
    const domString = this.dom.map((element) => element.outerHTML).join('')
    if (domString) {
      console.log('Render', domString, { props: renderKit.props })
    }

    return this.dom
  }

  rerender(renderKit) {
    /*
      1. if the children are identical, no-op
      2. child has changed: re-render
      3. child has been removed: remove from dom
      4. child is added, render
    */

    this.dom = recursiveRender(this.collection, renderKit, [], 'rerender')
    
    const domString = this.dom.map((element) => element.outerHTML).join('')
    if (domString) {
      console.log('Re-render children', domString, { props: renderKit.props })
    }
    
    return this.dom
  }

  renderIntoParent(parentNode, renderKit) {
    this.render(renderKit).forEach((dom) => {
      parentNode.append(dom)
    })
  }

  rerenderIntoParent(parentNode, renderKit) {
    this.rerender(renderKit).forEach((dom) => {
      parentNode.append(dom)
    })
  }
}
