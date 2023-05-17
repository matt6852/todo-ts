import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { API } from '../api/usersApi'
import { unsplashAPI } from '../api/unsplashAPI'

const UnsplashPage = () => {
 const [term, setTrem] = useState("")
 const { data, isLoading, error } = useQuery({
  queryKey: ["images", term],
  queryFn: () => unsplashAPI.seacrhImages(term)
 })
 console.log(data, "data")
 const onSubmit = (e) => {
  e.preventDefault()
  const value = e.target.elements.search.value
  setTrem(value)
  // console.log(value)
 }

 let content
 if (isLoading) {
  content = <h1>Loading</h1>
 } if (error) {
  content = error
 } if (data?.results && data?.results.length > 0) {
  content = data.results.map((img) => {
   const { id, urls: { regular }, description } = img
   return (
    <div style={{ margin: "16px" }} key={id}>
     <img width={"400px"} src={regular} alt={description} />
    </div>

   )
  })
 }
 return (
  <div >
   <form onSubmit={onSubmit}>
    <input type="text" name='search' className='border' />
    <button className='border'>search</button>
   </form>
   <div >
    {content}
   </div>
  </div>
 )
}
export default UnsplashPage
