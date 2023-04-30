import type { FC } from 'react'
import { createElement } from 'react'
interface Props {
  name: string
}
const App: FC<Props> =(props) => {
  return (
        <div>
            Hello World!
        </div>
  )
}
export default createElement(App)
