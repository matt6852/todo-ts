import React, { FormEvent, useReducer } from 'react'
// import useConter from '../hooks/use-counter-hook'
import Button from '../components/Button'

const countReducer = (state: any, action: any) => {
 if (action.type === "inc") {
  return { ...state, count: state.count + 1 }
 }
 if (action.type === "dec") {
  return { ...state, count: state.count - 1 }
 }
 if (action.type === "add") {
  return { ...state, count: state.count + state.addValue, addValue: 0 }
 }
 if (action.type === "set") {
  return { ...state, addValue: action.payload }
 }

 return state
}
const countState = {
 count: 10,
 addValue: 0
}

const CounterPage = () => {
 const [state, dispatch] = useReducer(countReducer, countState)
 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  dispatch({ type: "add" })
 }

 const increce = () => {
  dispatch({ type: "inc" })
 }
 const decrice = () => {
  dispatch({ type: "dec" })
 }
 const handleChange = (e: any) => {

  dispatch({ type: "set", payload: +e.target.value || 0 })
 }

 return (
  <div>
   <Button onClick={increce} primary>+</Button>
   <Button onClick={decrice} danger>-</Button>
   <h1>conuter: {state.count}</h1>
   <form onSubmit={handleSubmit} >
    <div> <input onChange={handleChange} className='border' value={state.addValue || ""} type="number" /></div>
    <div> <Button warning rounded>submit</Button>
    </div>

   </form>
  </div>
 )
}

export default CounterPage
