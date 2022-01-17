import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { IRegisterForm } from '../../types/interfaces';

export const registerQuery: any = createAsyncThunk(
  'registerUser/registerQuery',
  async (values: IRegisterForm) => await http.registryUser(values),
);

export const registerUser = createSlice({
  name: 'registerUser',
  initialState: {
    userIsLoading: true,
  },
  reducers: {},
  extraReducers: {
    [registerQuery.pending]: (state, action) => {
      state.userIsLoading = true;
    },
    [registerQuery.fulfilled]: (state, action) => {
      state.userIsLoading = false;
    },
    [registerQuery.rejected]: (state, action) => {
      state.userIsLoading = false;
    },
  },
});

export default registerUser.reducer;
