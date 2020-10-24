export default class TextTemplate {
  constructor(content) {
    this.value = content
  }

  render({document}) {
    document = document || window.document
    this.dom = document.createTextNode(this.value)
    return this.dom
  }
}