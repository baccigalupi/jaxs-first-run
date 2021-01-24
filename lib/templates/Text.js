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
    console.log('Rerender on text', this.dom)
    return this.dom
  }
}
