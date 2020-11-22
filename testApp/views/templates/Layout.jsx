import jsx from '../../../lib/jsx'

import {
  TabBar, TabNavItem
} from '../boundTemplates/Layout/Tabs'

export default ({children}) => {
  return (
    <div class="container mt-4">
      <TabBar>
        <TabNavItem
          description='Rendering'
          href='/'
        />
        <TabNavItem
          href='/counter'
          description='State change'
        />
        <TabNavItem
          href='/navigation'
          description='Navigation'
        />
        <TabNavItem
          href='/sign-in'
          description='Sign in'
        />
      </TabBar>
      <div class='border-right border-left border-bottom'>
        {children}
      </div>
    </div>
  )
}