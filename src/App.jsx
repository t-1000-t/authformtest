import React from 'react'
import './App.css'
import Auth from './components/wrapComponents/Auth'
import RoutesRender from './components/RoutesRender'

const App = () => {
  return (
    <Auth>
      <RoutesRender />
    </Auth>
  )
}

export default App
