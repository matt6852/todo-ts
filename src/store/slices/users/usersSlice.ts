import { createSlice  } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import { fetchPoks, fetchUsers, getSigleUser } from "./fetchUsers";


export type UserType ={
 name:string,
 description:string
 id:string,
 websiteUrl:string
 createdAt:Date
}
export interface UsersState{
 users:UserType[]
 loading:boolean
 error:string | null |any
 singleUser:UserType | null
 poks:any
 limit:number
 offset:number
 currentPage:number
}

const initialState:UsersState ={
 users:[],
 poks:{},
 limit:10,
 offset:0,
 currentPage:1,
 loading:false,
 error:null,
 singleUser:null
} 

const usersSlice = createSlice({
 name:"users",
 initialState,
 reducers:{
  changePage(state,action){
   state.currentPage = action.payload
  },
  changeLimit(state,action){
   state.limit = action.payload
  }
 },
 extraReducers(builder){
  builder.addCase(fetchUsers.pending,(state,)=>{
   state.loading =true
  });
  builder.addCase(fetchUsers.fulfilled,(state,action)=>{
   state.loading =false
   state.users = action.payload
  })
  builder.addCase(fetchUsers.rejected,(state,action)=>{
   state.loading =false   
   state.error = action.error.message
  })
  builder.addCase(getSigleUser.rejected,(state,action)=>{
   state.loading =false   
   state.error = action.error.message
   state.singleUser =null
  })
  builder.addCase(getSigleUser.fulfilled,(state,action)=>{
   state.loading =false   
   state.error = null
   state.singleUser =action.payload.data
  })
  builder.addCase(getSigleUser.pending,(state,action)=>{
   state.loading =true   
   state.error = null
   state.singleUser =null
  })
  builder.addCase(fetchPoks.fulfilled,(state,action)=>{
   state.loading =false  
   state.poks =action.payload
  })
  builder.addCase(fetchPoks.rejected,(state,action)=>{
   state.loading =false  
   state.poks =[]
   state.error = action.payload
  })
  builder.addCase(fetchPoks.pending,(state,action)=>{
   state.loading =true  
 
  })
 }
})

export default usersSlice.reducer

export const {changePage ,changeLimit} = usersSlice.actions