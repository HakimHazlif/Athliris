import { createAsyncThunk } from '@reduxjs/toolkit'

export const validateUserData = createAsyncThunk(
  'userData/validateUserData',
  async (userData) => {}
)
