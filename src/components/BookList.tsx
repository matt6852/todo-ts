import { BooksType, } from '../App'
import BookShow from './BookShow'

type BookListProps = {
 books: BooksType[],
 deleteBook: (id: number) => void
 changeTitle: (id: number, title: string) => void
}
function BookList(props: BookListProps) {
 const { books, deleteBook, changeTitle } = props

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