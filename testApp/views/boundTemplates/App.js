import { bind } from '../../../lib/templates/Bound'
import routes from '../../../lib/app/routes'
import Template from '../templates/App'

import Counter from './Pages/Counter'
import Rendering from '../templates/Pages/Rendering'
import SignIn from '../templates/Pages/SignIn'
import NotFound from '../templates/Pages/NotFound'

const pages = routes()
  .addPath('/', Rendering)
  .addPath('/counter', Counter)
  .addPath('/sign-in', SignIn)
  .default(NotFound)

const viewModel = (state) => {
  const curretPath = state.app.location.path 
  const route = pages.getRoute(curretPath)
  return {
    Page: route.component 
  }
}

export default bind(Template, viewModel)

