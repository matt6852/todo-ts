import { useState } from 'react'
import './index.css'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'

export type BooksType = {
  title: string,
  id: number
}

function App() {
  const [books, setBooks] = useState<BooksType[]>([])
  console.log(books);
  const createBook = (title: string) => {
    const id = Math.floor(Math.random() * 9999)
    const newbook = { id, title }
    setBooks([...books, newbook])
  }
  const deleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id))
  }
  const changeTitle = (id: number, title: string) => {
    setBooks(books.map(book => book.id === id ? ({ ...book, title }) : book))
  }
  return (
    <div className='app'>
      <BookList changeTitle={changeTitle} deleteBook={deleteBook} books={books} />
      <BookCreate createBook={createBook} />
    </div>
  )
}

export default App
