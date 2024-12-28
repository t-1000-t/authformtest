import { lazy } from 'react'
import Home from '../components/Home'
import GuestGuard from '../components/reusableComponents/GuestGuard'
import GuestLayout from '../components/reusableComponents/GuestLayout'

const routesConfig = [
  {
    exact: true,
    layout: GuestLayout,
    path: '/',
    guard: GuestGuard,
    component: Home,
    id: 'id_UniqX0',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/login',
    guard: GuestGuard,
    component: lazy(() => import('../components/Login')),
    id: 'id_UniqX1',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/about',
    guard: GuestGuard,
    component: lazy(() => import('../components/About')),
    id: 'id_UniqX2',
  },
]

export default routesConfig
