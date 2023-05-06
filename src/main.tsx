import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import BooksProvider from './context'
import NavigationProvider from './context/navigation'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <NavigationProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </NavigationProvider>
  </Provider>


)
