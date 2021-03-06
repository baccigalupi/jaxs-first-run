import { bind, router } from '../../../lib/jaxs'
import Template from '../templates/App'

import Counter from './Pages/Counter'
import ShowUser from '../templates/Pages/ShowUser'
import Rendering from '../templates/Pages/Rendering'
import SignIn from '../templates/Pages/SignIn'
import NotFound from '../templates/Pages/NotFound'

const pages = router()
  .addPath('/', Rendering)
  .addPath('/counter', Counter)
  .addPath('/sign-in', SignIn)
  .addMatcher(/^\/users\/(\d+)/, ShowUser)
  .default(NotFound)

const viewModel = (state) => {
  const path = state.app.location.path 
  const route = pages.getRoute(path)

  return {
    Page: route.component,
    matches: route.matches
  }
}

export default bind(Template, viewModel)
