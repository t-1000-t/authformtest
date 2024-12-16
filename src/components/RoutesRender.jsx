import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from '../configs/routesConfig'
import LoadingScreen from './reusableComponents/LoadingScreen'

const RoutesRender = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <Suspense fallback={<LoadingScreen />}>
              {route.guard && (
                <route.guard>
                  {route.layout ? (
                    <route.layout>
                      <route.component />
                    </route.layout>
                  ) : (
                    <route.component />
                  )}
                </route.guard>
              )}
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default RoutesRender
