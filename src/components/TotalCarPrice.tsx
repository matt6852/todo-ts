import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const TotalCarPrice = () => {
 const price = useSelector((state: RootState) => state.carList.totlaPrice)
 return (
  <div>
   TotalCarPrice:{price}
  </div>
 )
}

export default TotalCarPrice



