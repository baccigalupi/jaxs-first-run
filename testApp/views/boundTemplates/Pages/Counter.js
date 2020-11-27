import { bind } from '../../../../lib/templates/Bound'
import Template from '../../templates/Pages/Counter'

const viewModel = (state) => {
  return {
    counter: state.counter 
  }
}

export default bind(Template, viewModel)

