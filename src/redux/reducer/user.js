import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk('', async () => {
  try {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/'
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw (error)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: { data: [] },
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload
    },
  }
})

export default userSlice.reducer