import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, db } from '../../../api/firebase'
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { firstName, lastName, email, password } = userData
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email: user.email,
        avatar: user.photoURL || '',
        createdAt: serverTimestamp(),
        lastSignin: serverTimestamp(),
      })

      return {
        uid: user.uid,
        username: `${firstName} ${lastName}`,
        email: user.email,
        avatar: user.photoURL || '',
        createdAt: user.metadata.creationTime,
        lastSignin: user.metadata.lastSignInTime,
      }
    } catch (err) {
      let errorMessage

      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email is already in used'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address'
          break
        case 'auth/weak-password':
          errorMessage = 'Password is too weak'
          break
        default:
          errorMessage = 'An unexpected error occurred'
          break
      }
      return rejectWithValue(errorMessage)
    }
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      return {
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        avatar: user.photoURL || '',
        createdAt: user.metadata.creationTime,
        lastSignin: user.metadata.lastSignInTime,
      }
    } catch (err) {
      let errorMessage
      console.log(err.code)

      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address'
          break
        case 'auth/user-not-found':
          errorMessage = 'User not found'
          break
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password'
          break
        case 'auth/too-many-requests':
          errorMessage =
            'Account temporarily blocked due to multiple failed login attempts'
          break
        default:
          errorMessage = 'An unexpected error occurred'
          break
      }

      return rejectWithValue(errorMessage)
    }
  }
)

export const logOut = createAsyncThunk(
  'user/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth)
      return
    } catch (err) {
      let errorMessage
      console.log(err.code)

      if (err.code === 'auth/no-current-user') {
        errorMessage = 'No user is currently signed in'
      } else {
        errorMessage = 'An unexpected error occurred'
      }

      return rejectWithValue(errorMessage)
    }
  }
)

export const sendResetEmail = createAsyncThunk(
  'user/sendRestEmail',
  async (email, { rejectWithValue }) => {
    try {
      auth.useDeviceLanguage()
      await sendPasswordResetEmail(auth, email, {
        url: 'http://localhost:5173/reset-password/change',
        handleCodeInApp: true,
      })
      return email
    } catch (err) {
      let errorMessage
      console.log(err.code)

      switch (err.code) {
        case 'auth/user-not-found':
          errorMessage = 'User not found'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address'
          break
        default:
          errorMessage = 'An unexpected error occurred'
          break
      }
      return rejectWithValue(errorMessage)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async ({ oobCode, newPassword }, { rejectWithValue }) => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword)

      // onAuthStateChanged(auth, (user) => {
      //   console.log(user)
      //   if (user) {
      //     console.log('render setUser')
      //     dispatch(
      //       setUser({
      //         uid: user.uid,
      //         username: user.displayName,
      //         email: user.email,
      //         avatar: user.photoURL || '',
      //         createdAt: user.metadata.creationTime,
      //         lastSignin: user.metadata.lastSignInTime,
      //       })
      //     )
      //   } else {
      //     console.log('render setUserFailure')

      //     dispatch(setUserFailure())
      //   }
      // })
    } catch (err) {
      let errorMessage
      console.log(err.code)
      switch (err.code) {
        case 'auth/expired-action-code':
          errorMessage = 'The password reset code has expired'
          break
        case 'auth/invalid-action-code':
          errorMessage = 'The password reset code is invalid'
          break
        case 'auth/weak-password':
          errorMessage = 'Password is too weak'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.'
          break
        case 'auth/internal-error':
          errorMessage = 'An internal error occurred. Try again later.'
          break
        case 'auth/invalid-user-token':
          errorMessage = 'Invalid user token. Please sign in again.'
          break
        case 'auth/session-expired':
          errorMessage = 'Session expired. Please log in again.'
          break
        default:
          errorMessage = 'An unexpected error occurred'
          break
      }
      return rejectWithValue(errorMessage)
    }
  }
)
