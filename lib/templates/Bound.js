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
      ...props,
      ...this.attributes
    }

    this.template = this.Template(this.props)

    console.log('bound props', this.props, this.template)

    return this.template.render({
      document,
      publish,
      state,
      props: this.props
    })
  }

  rerender({ document, state, publish }) {
    const newViewModelProps = this.viewModel(state)

    // if (!isEqual(this.viewModelProps, newViewModelProps)) {
    //   this.viewModelProps = newViewModelProps
    //   this.props = {
    //     ...this.viewModelProps,
    //     ...this.attributes
    //   }
    // }
    const props = {
      ...this.attributes,
      ...newViewModelProps
    }
    console.log('Rerender bound', { template: this.template, props, state })

    return this.template.rerender({
      document,
      publish,
      state,
      props
    })
  }
}

export const bind = (Template, viewModel) => {
  return (attributes) => new Bound(Template, viewModel, attributes)
}
