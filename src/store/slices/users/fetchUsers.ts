import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/usersApi";
import { UserType } from "./usersSlice";
import { pokemonAPI } from "../../../api/pokemonAPI";
export const fetchUsers  = createAsyncThunk<UserType[]>("users/fetch", async() =>{
 const {data:{items}} = await API.getAllBlogs()
 return items 
}) 

export const getSigleUser =  createAsyncThunk("users/fetchSingle",async (id:string) =>{
 const result =  await API.getSingleBlog(id)
 return result
})


export const fetchPoks = createAsyncThunk("fetcth/poks",async(settings)=>{
 // console.log(offset,"offset");
 let offset ,limit
  if(settings){
    offset= settings.offset
    limit= settings.limit
  }
  
 const result  =await pokemonAPI.getPokemons(offset,limit)
 const {next,previous,count} = result.data
  const mapedreuslt = await Promise.all(result.data.results.map(async (p)=>{
   const res = await fetch(p?.url)
   const data = await res.json()
   return {...p,info:data}
  }))
  return {rusults:mapedreuslt,next,previous,count}

})