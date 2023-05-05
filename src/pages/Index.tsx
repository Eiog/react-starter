import type { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'
import { Hello } from '~/components/HelloTsx'

interface Props {
  children?: ReactNode
}
export default function Index(props: Props) {
  const { darkMode, setDark } = useAppStore()
  const onClick = (e: MouseEvent) => {
    useToggleDark(e, () => {
      setDark(!darkMode)
    })
  }
  return (
    <>
      <div>Index</div>
      <Button onClick={onClick}>切换{darkMode.toString()}</Button>
      <Hello/>
    </>
  )
}
