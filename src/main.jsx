import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Wallpaper from './wallpaper.jpg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="avatar">
        <App/>
    </div>
  </StrictMode>,
)
