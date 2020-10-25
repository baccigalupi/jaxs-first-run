// import { template, Fragment } from './templates'
import TagTemplate from './templates/Tag'

const jsx = (type, attributes, ...children) => {
  return new TagTemplate(type, attributes, children)
}

jsx.fragment = (_attributes, children) => {
  // return new Fragment(children)
}

export default jsx