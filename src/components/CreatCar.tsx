import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { RootState, addCar, changeCost, changeName } from '../store'
import { FormEvent } from 'react'

const CreatCar = () => {
 const { name, cost } = useSelector((state: RootState) => state.car)
 const dispatch = useDispatch()
 const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  dispatch(changeName(value))
 }
 const handleInpuPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(e.target.value) || 0
  dispatch(changeCost(value))
 }
 const addNewCar = () => {
  if (name && cost) {
   dispatch(addCar({ name, cost }))
  }
 }
 return (
  <div style={{ display: "flex" }}>
   <input type="text" value={name} onChange={handleInputName} placeholder='car name' className='w-30 rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 mx-10' />
   <input type="number" value={cost || ""} onChange={handleInpuPrice} placeholder='price' min={0} className='w-30 rounded-md border-2 py-1.5 pl-7 pr-2 text-gray-900 mx-10' />
   <Button onClick={addNewCar} secondary rounded>submit</Button>
  </div>
 )
}

export default CreatCar
