import Children from './Children'

export default class FragmentTag {
  constructor(children) {
    this.children = new Children(children)
  }

  render({ document, publish, state, props }) {
    // props in here, not the renderKit type, used???
    this.dom = this.children.render({ props, document, publish, state })
    return this.dom
  }

  rerender({document, publish, state, props}) {
    this.dom = this.children.rerender({ props, document, publish, state })
  }
}
