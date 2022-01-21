import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { editPasswordUser } from '../editPasswordUser/editPasswordUser.slice';

export const resetPasswordUserQuery: any = createAsyncThunk(
  'resetPasswordUser/resetPasswordUserQuery',
  async ({ values, id, token }: any) => await http.resetPasswordUser(values, id, token),
);

export const resetPasswordUser = createSlice({
  name: 'resetPasswordUser',
  initialState: {
    userPasswordIsLoading: true,
    userError: '',
    userSuccessMessage: '',
  },
  reducers: {
    clearSuccessMessage(state) {
      state.userSuccessMessage = '';
    },
  },

  extraReducers: {
    [resetPasswordUserQuery.pending]: (state, action) => {
      state.userPasswordIsLoading = true;
      state.userError = '';
    },
    [resetPasswordUserQuery.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        state.userPasswordIsLoading = false;
        state.userSuccessMessage = action.payload.message;
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

export const { clearSuccessMessage } = resetPasswordUser.actions;

export default resetPasswordUser.reducer;
