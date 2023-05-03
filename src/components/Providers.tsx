import { ChakraProvider as Provider } from '@chakra-ui/react'
import type { Theme } from '@chakra-ui/react'

interface Props {
  theme?: Theme
  children: React.ReactNode
}
export function ChakraProvider({ theme, children }: Props) {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}
