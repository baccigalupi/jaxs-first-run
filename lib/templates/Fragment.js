import { recursiveRender } from './children'

export default class FragmentTag {
  render({ document, props, publish, state, children }) {
    return recursiveRender(children, { document, props, publish, state })
  }

  rerender(renderKit) {
    // ??
  }
}
