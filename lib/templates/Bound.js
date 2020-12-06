export class Bound {
  constructor(Template, viewModel, attributes) {
    this.Template = Template
    this.viewModel = viewModel
    this.attributes = attributes || {}
  }

  render({ document, props, publish, state }) {
    props = props || {}
    this.viewModelProps = this.viewModel(state)

    this.props = {
      ...this.viewModelProps,
      ...this.attributes
    }

    this.template = this.Template(this.props)

    return this.template.render({
      document,
      publish,
      state,
      props: this.props
    })
  }

  rerender({document, state, publish}) {
    const newViewModelProps = this.viewModel(state)
    
    if (!isEqual(this.viewModelProps, newViewModelProps)) {
      this.viewModelProps = newViewModelProps
      this.props = {
        ...this.viewModelProps,
        ...this.attributes
      }
    }

    this.template.rerender({
      document,
      publish,
      state,
      props: this.props
    })
  }
}

export const bind = (Template, viewModel) => {
  return (attributes) => new Bound(Template, viewModel, attributes)
}
