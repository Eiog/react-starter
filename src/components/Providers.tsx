import { ChakraProvider as Provider } from '@chakra-ui/react'
import type { ChakraTheme } from '@chakra-ui/react'

interface Props {
  theme?: ChakraTheme
  children: React.ReactNode
}
export function ChakraProvider({ theme, children }: Props) {
  const colorMode = theme ? theme.config.initialColorMode : 'light'
  console.log(colorMode)

  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}
