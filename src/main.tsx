import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import BooksProvider from './context'
import NavigationProvider from './context/navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NavigationProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </NavigationProvider>

)
