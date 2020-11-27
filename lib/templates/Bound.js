import jsx from '../jsx'

export class Bound {
  constructor(Template, viewModel, attributes) {
    this.Template = Template
    this.viewModel = viewModel
    this.attributes = attributes || {}
  }

  render({document, props, publish, state}) {
    props = props || {}

    const attributes = {
      ...this.viewModel(state),
      ...this.attributes
    }

    const Template = this.Template
    this.template = <Template {...attributes } />

    return this.template.render({
      document,
      publish,
      props: attributes,
      state
    })
  }
}

export const bind = (Template, viewModel) => {
  return (attributes) => new Bound(Template, viewModel, attributes)
}