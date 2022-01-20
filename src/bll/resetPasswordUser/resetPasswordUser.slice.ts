import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IResetPasswordUserForm } from '../../types/interfaces';
import http from '../../service/http';

export const resetPasswordUserQuery: any = createAsyncThunk(
  'resetPasswordUser/resetPasswordUserQuery',
  async (values: IResetPasswordUserForm) => await http.resetPasswordUser(values),
);

export const resetPasswordUser = createSlice({
  name: 'resetPasswordUser',
  initialState: {
    userPasswordIsLoading: true,
    userError: '',
    isUserChangePassword: false,
  },
  reducers: {
    clearIsUserFlag(state) {
      state.isUserChangePassword = false;
    },
  },

  extraReducers: {
    [resetPasswordUserQuery.pending]: (state, action) => {
      state.userPasswordIsLoading = true;
      state.userError = '';
      state.isUserChangePassword = false;
    },
    [resetPasswordUserQuery.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      if (action.payload.data.status === 200) {
        state.userPasswordIsLoading = false;
        state.isUserChangePassword = true;
      } else {
        state.userPasswordIsLoading = false;
        state.userError = action.payload.message;
      }
    },
    [resetPasswordUserQuery.rejected]: (state, action) => {
      state.userPasswordIsLoading = true;
    },
  },
});

export const { clearIsUserFlag } = resetPasswordUser.actions;

export default resetPasswordUser.reducer;
