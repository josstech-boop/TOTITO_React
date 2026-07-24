import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { TotitoProvider } from './Context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TotitoProvider>
      <App />

    </TotitoProvider>
  </StrictMode>,
)
