import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  login,
  logOut,
  resetPassword,
  sendResetEmail,
  signup,
} from '../../features/auth/service/apiAuth'
import toast from 'react-hot-toast'

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
    setUserFailure: (state) => {
      state.status = 'idle'
      ;(state.user = {
        uid: '',
        username: '',
        email: '',
        avatar: '',
        createdAt: '',
      }),
        (state.isLoggedIn = false)
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state) => {
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

        toast.success('You have logged out successfully!')
      })
      .addCase(sendResetEmail.fulfilled, (state, action) => {
        state.status = 'password changing'
        state.error = null
        state.user.email = action.payload

        toast.success('Password reset email sent successfully!')
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = 'password resetted'
        state.error = null

        toast.success('Password has been reset successfully!')
      })

    builder
      .addMatcher(
        isAnyOf(
          signup.pending,
          login.pending,
          logOut.pending,
          sendResetEmail.pending,
          resetPassword.pending
        ),
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
          signup.rejected,
          login.rejected,
          logOut.rejected,
          sendResetEmail.rejected,
          resetPassword.rejected
        ),
        (state, action) => {
          state.status = 'failed'
          state.error = action.payload

          toast.error(action.payload)
        }
      )
      .addMatcher(
        isAnyOf(signup.fulfilled, login.fulfilled),
        (state, action) => {
          state.status = 'succeeded'
          state.user = action.payload
          state.isLoggedIn = true
          state.error = null

          if (action.type === signup.fulfilled.type) {
            toast.success(
              `Account created successfully! Welcome, ${action.payload.username || 'User'}!`
            )
          } else if (action.type === login.fulfilled.type) {
            toast.success(`Welcome back, ${action.payload.username || 'User'}!`)
          }
        }
      )
  },
})

export const userData = (state) => state.user.user

export const { setUser, setUserFailure } = authSlice.actions
export default authSlice.reducer
