import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import userDataReducer from './slices/userDataSlice'

const store = configureStore({
  reducer: {
    userAuth: authReducer,
    userData: userDataReducer,
  },
})

export default store
