import { jsx } from '../../../lib/jaxs'
import TopNav from './Layout/TopNav'

export default ({children}) => {
  return (
    <div class="container mt-4">
      <TopNav />
      <div class='tab-body border-right border-left border-bottom'>
        <div class='container'>
          {children}
        </div>
      </div>
    </div>
  )
}
