import React from 'react'
import TotalCarPrice from './TotalCarPrice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, changeTerm, removeCar } from '../store'
import Button from './Button'

const CarList = () => {
 const { carList, serchTerm } = useSelector((state: RootState) => state.carList)
 const { name } = useSelector((state: RootState) => state.car)
 const dispatch = useDispatch()
 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  dispatch(changeTerm(value))
 }
 const renderCars = carList.filter((car) => serchTerm ? car.name.includes(serchTerm) : car).map((car) => {
  return <div key={car.id} style={{ display: "flex", justifyContent: "space-between", padding: 5, alignItems: "center" }}>
   <div style={{ border: car.name === name ? "solid red 2px" : "" }} >Car name: {car.name} , price: {car.cost}</div>
   <Button onClick={() => dispatch(removeCar(car.id!))} rounded danger>delet</Button>
  </div>
 })
 return (
  <div>
   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>My cars</div>  <div><input onChange={handleSearch} type="text" placeholder='sreac car' className='w-30 rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 mx-10' /></div>
   </div>
   {renderCars}
   <div>
    <TotalCarPrice />
   </div>
  </div>
 )
}

export default CarList
