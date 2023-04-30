import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '~/pages/Index'

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
    </BrowserRouter>
  )
}
