import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Controls } from './Controls.jsx'

const mountEl = document.getElementById('react-controls')

if (mountEl) {
  createRoot(mountEl).render(
    <StrictMode>
      <Controls />
    </StrictMode>,
  )
}
