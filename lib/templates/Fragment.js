import { renderReduceChildren } from './children'

export default class FragmentTag {
  render({document, props, publish, state, children}) {
    return renderReduceChildren(children, {document, props, publish, state})
  }
}