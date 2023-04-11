import React, { useState } from 'react'
import { BooksType, } from '../App'
import BookEdit from './BookEdit'

type BookShowPropsType = {
 book: BooksType
 deleteBook: (id: number) => void
 changeTitle: (id: number, title: string) => void
}

const BookShow: React.FC<BookShowPropsType> = ({ book, deleteBook, changeTitle }) => {
 const [isEdit, setIsEdit] = useState(false)
 const handleDeleteBook = () => {
  deleteBook(book.id)
 }
 const handleEdit = () => {
  setIsEdit(!isEdit)
 }
 const handleSubmit = (id: number, title: string) => {
  changeTitle(id, title)
  setIsEdit(false)

 }
 let content: string | JSX.Element = <h3>{book.title}</h3>
 if (isEdit) {
  content = <BookEdit book={book} handleSubmitBook={handleSubmit} />
 }


 return (
  <div className='book-show'>
   <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="pic" />
   <div>
    {content}
   </div>
   <div className='actions'>
    <button className='edit' onClick={handleEdit}>edit</button>
    <button className='delete' onClick={handleDeleteBook}>delete book</button>
   </div>

  </div>
 )
}

export default BookShow