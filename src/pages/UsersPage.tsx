import React, { useEffect } from 'react'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPoks, fetchUsers } from '../store/slices/users/fetchUsers'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from '../store';
import { UsersState } from '../store/slices/users/usersSlice';
import Acordion from '../components/Acordion';


const debunce = (cb: () => any, ms: number) => {
 let timer: number | undefined
 return function () {
  clearTimeout(timer)
  timer = setTimeout(() => {
   //@ts-ignore
   cb.apply(this, arguments)
  }, ms)
 }
}
const throttling = (cb, ms) => {
 let wait = false
 return function (...args) {
  if (wait) return
  cb.apply(this, args)
  wait = true
  setTimeout(() => wait = false, ms)
 }
}

const UsersPage = () => {
 const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
 const { users, loading, error }: any = useSelector<RootState>(({ users }) => users)

 useEffect(() => {
  dispatch(fetchUsers())
  dispatch(fetchPoks())
 }, [])


 const fn = (arg) => {
  console.log(arg);

 }

 const thorleFn = throttling(fn, 3000)




 return (
  <div>
   <h1>Users page</h1>
   {loading && <h1>Loading</h1>}
   {!loading && !error && users.length && <Acordion items={users} />}
   {error && <h1>{error}</h1>}
   <button onClick={() => thorleFn("click")}>thorotle</button>
  </div>
 )
}

export default UsersPage
