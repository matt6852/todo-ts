import { createContext, useContext, useState } from "react";
export interface TodoContextType {
 books: BooksType[],
 deleteBook: (id: number) => void
 changeTitle: (id: number, title: string) => void
 createBook: (title: string) => void
}
const BooksContext = createContext<TodoContextType | null>(null)

const useMyContexthook = () => {
 return useContext(BooksContext)
}
type BooksType = {
 title: string,
 id: number
}

type Props = {
 children?: JSX.Element | JSX.Element[]
}
const BooksProvider = ({ children }: Props) => {
 const [books, setBooks] = useState<BooksType[]>([])
 // console.log(books);
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
 const valueToShare: TodoContextType = { books, deleteBook, changeTitle, createBook }

 return (
  <BooksContext.Provider value={valueToShare
  }>
   {children}
  </BooksContext.Provider>
 )
}
export default BooksProvider
export { useMyContexthook }