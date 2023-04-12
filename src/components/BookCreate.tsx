import { FormEvent, useState } from 'react'
import { useMyContexthook } from "../context"

function BookCreate() {
 const { createBook }: any = useMyContexthook()
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