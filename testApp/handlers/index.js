import { linkSubscription } from '../../lib/handlers/navigation'
import { noOpSubscription } from '../../lib/handlers/noOp'

export default [
  linkSubscription,
  noOpSubscription
]
