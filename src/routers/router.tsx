import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Index from '~/pages/Index'
import About from '~/pages/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
]
const router = createBrowserRouter(routes)

export default router
