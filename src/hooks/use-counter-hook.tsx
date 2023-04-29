import React, { useState } from 'react'

const useConter = (initState: number) => {
 const [counter, setCounter] = useState(initState)

 const incrementCounter = () => {
  setCounter(counter + 1)
 }
 return {
  counter,
  incrementCounter
 }


}

export default useConter
