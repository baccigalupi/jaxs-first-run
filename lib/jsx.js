import TagTemplate from './templates/Tag'
import AbstractTemplate from './templates/Abstract'


const jsx = (type, attributes, ...children) => {
  if (typeof type === 'string') {
    return new TagTemplate(type, attributes, children)
  } else {
    return new AbstractTemplate(type, attributes, children)
  }
}

jsx.fragment = (_attributes, children) => {
  // return new Fragment(children)
}

export default jsx