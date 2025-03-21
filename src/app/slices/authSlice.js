import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { login, logOut, signup } from '../../api/apiAuth'

const initialState = {
  user: {
    uid: '',
    username: '',
    email: '',
    avatar: '',
    createdAt: '',
  },
  isLoggedIn: false,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.status = 'authenticated'
      state.user = action.payload
      state.isLoggedIn = true
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = {
        uid: '',
        username: '',
        email: '',
        avatar: '',
        createdAt: '',
      }
      state.isLoggedIn = false
      state.status = 'idle'
      state.error = null
    })

    builder
      .addMatcher(
        isAnyOf(signup.pending, login.pending, logOut.pending),
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(signup.rejected, login.rejected, logOut.rejected),
        (state, action) => {
          state.status = 'failed'
          state.error = action.payload
        }
      )
      .addMatcher(
        isAnyOf(signup.fulfilled, login.fulfilled),
        (state, action) => {
          state.status = 'succeeded'
          state.user = action.payload
          state.isLoggedIn = true
          state.error = null
        }
      )
  },
})

export const userData = (state) => state.user.user

export const { setUser } = authSlice.actions
export default authSlice.reducer
