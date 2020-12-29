if (module.hot) {
  module.hot.accept()
}

import app from './app'
import Template from './views/boundTemplates/App'

app.render({
  selector: '#app',
  Template
})