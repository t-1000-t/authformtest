import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from '../configs/routesConfig'
import LoadingScreen from './LoadingScreen'

const RoutesRender = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <Suspense fallback={<LoadingScreen />}>
              {route.guard ? (
                <route.guard>
                  <route.component />
                </route.guard>
              ) : null}
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default RoutesRender
