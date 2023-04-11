import React, { FormEvent, useState } from 'react'
import { BooksType } from '../App'
type BookShowPropsType = {
 book: BooksType

 handleSubmitBook: (id: number, title: string) => void
}
const BookEdit: React.FC<BookShowPropsType> = ({ book, handleSubmitBook }) => {
 const [value, setValue] = useState(book.title)
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
 }
 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  handleSubmitBook(book.id, value)
 }
 return (
  <div>
   <form className='book-edit' onSubmit={handleSubmit} >
    <input className='input' type="text" value={value} onChange={handleChange} />
    <button className='button is-primary'>save</button>
   </form>
  </div>
 )
}

export default BookEdit