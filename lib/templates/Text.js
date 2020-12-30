import { createTextNode } from '../utilities/dom'

export default class TextTemplate {
  constructor(content) {
    this.value = content
  }

  render({ document }) {
    this.dom = createTextNode(this.value, document)
    return this.dom
  }

  rerender() {
    console.log('calling re-render on', this.dom)
  }
}
