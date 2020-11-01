import jsx from '../../../lib/jsx'

import {
  TabBar, TabNavItem
} from './Layout/Tabs'

export default ({children}) => {
  return (
    <div class="container mt-4">
      <TabBar>
        <TabNavItem
          currentPath='/'
          description='Rendering'
          href='/'
        />
        <TabNavItem
          href='/counter'
          description='State change'
          currentPath='/'
        />
        <TabNavItem
          href='/navigation'
          description='Navigation'
          currentPath='/'
        />
        <TabNavItem
          href='/sign-in'
          description='Sign in'
          currentPath='/'
        />
      </TabBar>
      <div class='border-right border-left border-bottom'>
        {children}
      </div>
    </div>
  )
}