import './index.css'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import { TodoContextType, useMyContexthook } from './context'

export type BooksType = {
  title: string,
  id: number
}

function App() {
  const { books } = useMyContexthook() as TodoContextType
  console.log(books);


  return (
    <div className='app'>
      <h1>list books</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
