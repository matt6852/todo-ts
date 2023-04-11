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
 let content: string | JSX.Element = book.title
 if (isEdit) {
  content = <BookEdit changeTitle={changeTitle} book={book} handleEdit={handleEdit} />
 }

 return (
  <div>
   <h3>{content}</h3>
   <button onClick={handleEdit}>edit book</button>
   <button onClick={handleDeleteBook}>delete book</button>
  </div>
 )
}

export default BookShow