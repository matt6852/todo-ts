import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import BooksProvider from './context'
import NavigationProvider from './context/navigation'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <NavigationProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </NavigationProvider>
    </QueryClientProvider>

  </Provider>


)
