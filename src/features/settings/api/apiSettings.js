import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../../api/firebase'
import { updateProfile } from 'firebase/auth'
import axios from 'axios'

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUDE_NAME

export const changeUsernameAndAvatar = createAsyncThunk(
  'user/updateNameAndAvatar',
  async ({ username, avatar }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser

      if (!user) {
        return rejectWithValue('User not logged in')
      }

      const updates = {}

      if (username !== user.displayName) {
        updates.username = username
        await updateProfile(user, { displayName: username })
      }

      if (avatar) {
        const file = avatar.get('file')

        if (!file) {
          return rejectWithValue('invalid image file')
        }

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          avatar
        )

        console.log(res.data)

        const avatarUrl = await res.data.url

        updates.avatar = avatarUrl

        await updateProfile(user, {
          photoURL: avatarUrl,
        })
      }

      return updates
    } catch (error) {
      return rejectWithValue(error?.message || 'Unexpected error')
    }
  }
)
