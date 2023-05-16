import axios from "axios";

const instance = axios.create({
 baseURL:"https://backend-redone-57h8.vercel.app/",
 // withCredentials: true,
})
export const API ={
 async getAllBlogs (){
   const {data} = await instance.get("blogs")
  return  data
 },
 getSingleBlog(id:string){
  return instance.get(`blogs/${id}`)
 },
 
async createBlog(data){
  const {data:result}= await instance.post(`blogs/`,data,{
   headers: {
    authorization: "Basic YWRtaW46cXdlcnR5",
  },
  })
  return result
 },
async deleteBlog(id){
  const {data:result}= await instance.delete(`blogs/${id}`,{
   headers: {
    authorization: "Basic YWRtaW46cXdlcnR5",
  },
  })
  return result
 }
} 
