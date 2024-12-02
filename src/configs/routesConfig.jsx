import Home from '../components/Home'
import GuestGuard from '../components/GuestGuard'

const routesConfig = [
  {
    exact: true,
    // layout: GuestLayout,
    path: '/',
    guard: GuestGuard,
    component: Home,
    id: 'id_UniqX0',
  },
]

export default routesConfig
