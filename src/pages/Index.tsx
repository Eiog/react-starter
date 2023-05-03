import type { ReactNode } from 'react'
import { Hello } from '~/components/HelloTsx'

interface Props {
  children?: ReactNode
}
export default function Index(props: Props) {
  return (
    <>
      <div>Index</div>
      <Hello/>
    </>
  )
}
