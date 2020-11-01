import { bind } from '../../../../lib/templates/Bound'
import {
  TabBar,
  TabNavItem as TabNavItemTemplate
} from '../../templates/Layout/Tabs'

const viewModel = (state) => {
  return {
    currentPath: state.app.location.currentPath 
  }
}

const TabNavItem = bind(TabNavItemTemplate, viewModel)

export {
  TabBar,
  TabNavItem
}