import { RouterProvider } from 'react-router-dom'
import router from '~/routers/router'

export function RouterEntry() {
  return <RouterProvider router={router}/>
}
