import { } from "../App"
import { FormEvent, useState } from 'react'

type CreateBookTypeProps = {
 createBook: (title: string) => void
}

function BookCreate(props: CreateBookTypeProps) {
 const { createBook } = props
 const [title, setTitle] = useState<string>("")
 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  createBook(title)
  setTitle("")
 }


 return (
  <div className="book-create">
   <h3>Add a Book</h3>
   <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button className="button">submit</button>
   </form>
  </div>
 )
}

export default BookCreate