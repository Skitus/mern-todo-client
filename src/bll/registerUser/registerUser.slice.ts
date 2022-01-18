import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRegisterForm } from '../../types/interfaces';
import http from '../../service/http';
import { loginUser } from '../loginUser/loginUser.slice';

export const registerQuery: any = createAsyncThunk(
  'registerUser/registerQuery',
  async (values: IRegisterForm) => await http.registryUser(values),
);

export const registerUser = createSlice({
  name: 'registerUser',
  initialState: {
    userIsLoading: true,
    userError: '',
  },
  reducers: {
    clearError(state) {
      state.userError = '';
    },
  },
  extraReducers: {
    [registerQuery.pending]: (state, action) => {
      state.userIsLoading = true;
    },
    [registerQuery.fulfilled]: (state, action) => {
      if (action.payload.data.status === 200) {
        state.userIsLoading = false;
        state.userError = '';
      } else {
        state.userIsLoading = false;
        state.userError = action.payload.data.message;
      }
    },
    [registerQuery.rejected]: (state, action) => {
      state.userIsLoading = false;
    },
  },
});

export const { clearError } = registerUser.actions;

export default registerUser.reducer;
