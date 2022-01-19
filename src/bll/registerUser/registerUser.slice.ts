import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRegisterForm } from '../../types/interfaces';
import http from '../../service/http';

export const registerQuery: any = createAsyncThunk(
  'registerUser/registerQuery',
  async (values: IRegisterForm) => await http.registryUser(values),
);

export const registerUser = createSlice({
  name: 'registerUser',
  initialState: {
    userIsLoading: true,
    userError: '',
    isUserRegister: false,
  },
  reducers: {
    clearIsUserFlag(state) {
      state.isUserRegister = false;
    },
  },
  extraReducers: {
    [registerQuery.pending]: (state, action) => {
      state.userIsLoading = true;
      state.userError = '';
      state.isUserRegister = false;
    },
    [registerQuery.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        state.userIsLoading = false;
        state.isUserRegister = true;
      } else {
        state.userIsLoading = false;
        state.userError = action.payload.message;
      }
    },
    [registerQuery.rejected]: (state, action) => {
      state.userIsLoading = false;
    },
  },
});

export const { clearIsUserFlag } = registerUser.actions;

export default registerUser.reducer;
