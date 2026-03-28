import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import  NetflixSereies  from './components/NetflixSereies.jsx'
// import  Profile  from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <NetflixSereies /> */}
    {/* <Profile/> */}
  </StrictMode>,
)
