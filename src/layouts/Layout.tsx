import { extendTheme } from '@chakra-ui/react'
import type { ChakraTheme } from '@chakra-ui/react'
import { ChakraProvider } from '~/components/Providers'

interface Props {
  children?: React.ReactNode
}
export default function Layout({ children }: Props) {
  const { themeConfig } = useAppStore()

  return (
      <ChakraProvider theme={extendTheme(themeConfig) as ChakraTheme}>
        <div className="wh-full flex-center bg-white dark:bg-gray-9" >
          <div className="max-w-xl h-full flex-col-center select-none ">
            {children}
          </div>
        </div>
      </ChakraProvider>
  )
}
