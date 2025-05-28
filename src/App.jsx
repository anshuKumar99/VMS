import React from 'react'
import VenueDashboard from './pages/VenueDashboard'
import ModuleAdmin from './pages/ModuleAdmin'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <VenueDashboard/>
      <ModuleAdmin/> */}
        <Outlet />
    </div>
  )
}

export default App
