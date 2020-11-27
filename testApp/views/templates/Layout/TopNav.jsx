import jsx from '../../../../lib/jsx'

import {
  TabBar, TabNavItem
} from '../../boundTemplates/Layout/Tabs'

export default () => {
  return (
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
        href='/sign-in'
        description='Sign in'
      />
    </TabBar>
  )
}
