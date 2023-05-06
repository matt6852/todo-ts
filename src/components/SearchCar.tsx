import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTerm } from '../store'

const SearchCar = () => {
 console.log("render search");

 const dispatch = useDispatch()
 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  dispatch(changeTerm(value))
 }
 return (
  <div>
   <input onChange={handleSearch} type="text" placeholder='sreac car' className='w-30 rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 mx-10' />
  </div>
 )
}
export default React.memo(SearchCar) 
