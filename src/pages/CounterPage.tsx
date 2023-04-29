import React, { FormEvent } from 'react'
import useConter from '../hooks/use-counter-hook'
import Button from '../components/Button'

const CounterPage = () => {
 const { counter } = useConter(10)
 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
 }
 return (
  <div>
   <h1>conuter: {counter}</h1>
   <form onSubmit={handleSubmit} >

    <div> <input className='border' type="number" /></div>
    <div> <Button warning rounded>submit</Button>
    </div>

   </form>
  </div>
 )
}

export default CounterPage
