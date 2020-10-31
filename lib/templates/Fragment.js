import { renderReduceChildren } from './children'

export default class FragmentTag {
  render({document, publish, props, children}) {
    return renderReduceChildren(children, {document, publish, props})
  }
}