import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import './index.css'
import AppRoutes from './AppRoutes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Auth0Provider
      domain='devxkapoor.us.auth0.com'
      clientId='H4IWhWGPBQzCA6nIqmo6J2dzC0M3iVka'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <AppRoutes />
    </Auth0Provider>
      </Router>
  </StrictMode>
)
