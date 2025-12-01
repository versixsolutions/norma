import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeSentry } from './lib/sentry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Initialize Sentry for error tracking and performance monitoring
initializeSentry()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)