import { jsx } from '../../../../lib/jaxs'

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
      <TabNavItem
        href='/users/42'
        description='Some user details'
      />
    </TabBar>
  )
}
