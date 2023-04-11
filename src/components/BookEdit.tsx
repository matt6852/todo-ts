import React, { FormEvent, useState } from 'react'
import { BooksType } from '../App'
type BookShowPropsType = {
 book: BooksType
 changeTitle: (id: number, title: string) => void
 handleEdit: () => void
}
const BookEdit: React.FC<BookShowPropsType> = ({ book, changeTitle, handleEdit }) => {
 const [value, setValue] = useState(book.title)
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
 }
 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  changeTitle(book.id, value)
  handleEdit()

 }
 return (
  <div>
   <form onSubmit={handleSubmit} >
    <input type="text" value={value} onChange={handleChange} />
    <button>save</button>
   </form>
  </div>
 )
}

export default BookEdit