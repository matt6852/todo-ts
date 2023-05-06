import React from 'react'
import TotalCarPrice from './TotalCarPrice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, changeTerm, removeCar } from '../store'
import Button from './Button'
import SearchCar from './SearchCar'

const CarList = () => {
 const { name } = useSelector((state: RootState) => state.car)
 const carList = useSelector(({ carList: { carList, serchTerm } }: RootState) => carList.filter((car) => car.name.toLowerCase().includes(serchTerm.toLocaleLowerCase())))
 const dispatch = useDispatch()

 const renderCars = carList.map((car) => {
  return <div key={car.id} style={{ display: "flex", justifyContent: "space-between", padding: 5, alignItems: "center" }}>
   <div style={{ border: car.name === name ? "solid red 2px" : "" }} >Car name: {car.name} , price: {car.cost}$</div>
   <Button onClick={() => dispatch(removeCar(car.id!))} rounded danger>delete</Button>
  </div>
 })
 return (
  <div>
   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>My cars</div>
    <SearchCar />
   </div>
   {renderCars}
   <div>
    <TotalCarPrice />
   </div>
  </div>
 )
}

export default CarList
