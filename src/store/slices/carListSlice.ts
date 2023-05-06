import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CatType ={
 name:string,
 cost:number,
 id?:string 
 
}
export interface CarListState {
 serchTerm: string;
 carList:CatType[]
 totlaPrice:number
}
const initialState: CarListState = {
 serchTerm: "",
 carList:[],
 totlaPrice:0
}

const carSlice = createSlice({
 name:"car",
 initialState,
 reducers:{
  addCar(state,action:PayloadAction<CatType>){
   state.carList.push({
    ...action.payload,
    id:nanoid()
   })
   state.totlaPrice = state.carList.reduce((acc,cur)=>acc+cur.cost,0)

  },
  removeCar(state,action:PayloadAction<string>){
   const removeCars = state.carList.filter(car =>car.id !==action.payload)
   const price =removeCars.reduce((acc,cur)=> acc+cur.cost,0)
   return{
    ...state,
    carList:removeCars,
    totlaPrice: price
   }
  },
  changeTerm(state,action:PayloadAction<string>){
   state.serchTerm = action.payload
  
  }
 }
})

export const {changeTerm,removeCar,addCar}  = carSlice.actions
export const carListReducer = carSlice.reducer