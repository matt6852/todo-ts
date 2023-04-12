import { BooksType, } from '../App'
import { TodoContextType, useMyContexthook } from '../context'
import BookShow from './BookShow'


function BookList() {
 const { books, deleteBook, changeTitle } = useMyContexthook() as TodoContextType

 const renderBooks = books.map((book: BooksType) =>
  <BookShow
   key={book.id}
   book={book}
   deleteBook={deleteBook}
   changeTitle={changeTitle}
  />)
 return (
  <div className='book-list'>{renderBooks}</div>
 )
}

export default BookList