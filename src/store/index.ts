import { configureStore } from '@reduxjs/toolkit'
import { carReducer,changeName,changeCost } from './slices/carSlice'
import { carListReducer,changeTerm,removeCar,addCar } from './slices/carListSlice'
import  usersReducer  from "./slices/users/usersSlice" 

export const store = configureStore({
  reducer: {
    car:carReducer,
    carList:carListReducer,
    users:usersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export{changeName,changeCost,changeTerm,removeCar,addCar}