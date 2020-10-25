export default class FragmentTag {
  render({document, publish, props, children}) {
    return children.map((view) => {
      return view.render({document, publish, props})
    })
  }
}