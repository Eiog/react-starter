import { createRoot } from 'react-dom/client'
import './assets'
import App from './App'
const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<App/>)
