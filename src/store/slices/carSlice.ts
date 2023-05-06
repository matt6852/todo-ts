import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CarState {
 name: string;
 cost:number
}
const initialState: CarState = {
 name: "",
 cost:0
}

const carSlice = createSlice({
 name:"car",
 initialState,
 reducers:{
  changeName(state,action:PayloadAction<string>){
   state.name = action.payload
  },
  changeCost(state,action:PayloadAction<number>){
   state.cost = action.payload
  }
 }
})

export const {changeName,changeCost}  = carSlice.actions
export const carReducer = carSlice.reducer