import { ChakraProvider } from '~/components/Providers'

interface Props {
  children?: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
      <ChakraProvider>
        <div className="wh-full flex-center bg-white dark:bg-gray-9" >
          <div className="max-w-xl h-full flex-col-center select-none ">
            {children}
          </div>
        </div>
      </ChakraProvider>
  )
}
