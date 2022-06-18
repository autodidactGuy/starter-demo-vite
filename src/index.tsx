import React from 'react'
import { createRoot } from 'react-dom/client'

import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  )
}

const container = document.getElementById('root') as any
const root = createRoot(container)

root.render(
  <>
    <App />
  </>,
)
