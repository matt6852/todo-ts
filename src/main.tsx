import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import BooksProvider from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BooksProvider>
    <App />
  </BooksProvider>,
)
