import axios from "axios";

const instance = axios.create({
 baseURL:"https://pokeapi.co/api/v2/"
})

export const pokemonAPI ={
 getPokemons(offset =0,limit=10,){  
  return instance.get(`pokemon?offset=${offset}&limit=${limit}`)
 }
}