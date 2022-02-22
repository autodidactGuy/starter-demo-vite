import React from 'react'
import ReactDOM from 'react-dom'

import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
