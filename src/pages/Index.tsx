import type { MouseEventHandler, ReactNode } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { Hello } from '~/components/HelloTsx'

interface Props {
  children?: ReactNode
}
export default function Index(props: Props) {
  const { darkMode, setDarkMode } = useAppStore()
  const { colorMode, toggleColorMode } = useColorMode()
  const onClick: MouseEventHandler<HTMLButtonElement> = ({ nativeEvent }) => {
    useToggleDark(nativeEvent, () => {
      setDarkMode(!darkMode)
      toggleColorMode()
    })
  }
  return (
    <>
      <div>Index</div>
      <Button onClick={onClick} type="button" colorScheme="green">切换{darkMode.toString()}</Button>
      <Hello/>
    </>
  )
}
