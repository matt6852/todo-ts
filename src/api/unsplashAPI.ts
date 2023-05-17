import axios from "axios";

const instance = axios.create({
 baseURL:`https://api.unsplash.com/`
})

export const unsplashAPI={
 async seacrhImages(query:string){
  const {data} = await instance.get(`search/photos?client_id=${import.meta.env.VITE_SOME_KEY}&query=${query}`)
  return data
 }
}