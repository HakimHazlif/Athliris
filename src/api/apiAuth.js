import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, db } from './firebase'
import {
  createUserWithEmailAndPassword,
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
      return rejectWithValue(err.message)
    }
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('start')
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
      return rejectWithValue(err.message)
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
      return rejectWithValue(err.message)
    }
  }
)
