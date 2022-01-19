import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IEditPasswordUserForm } from '../../types/interfaces';
import http from '../../service/http';

export const editPasswordUserQuery: any = createAsyncThunk(
  'editPasswordUser/editPasswordUserQuery',
  async (values: IEditPasswordUserForm) => await http.editPasswordUser(values),
);

export const editPasswordUser = createSlice({
  name: 'editPasswordUser',
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
    [editPasswordUserQuery.pending]: (state, action) => {
      state.userPasswordIsLoading = true;
      state.userError = '';
      state.isUserChangePassword = false;
    },
    [editPasswordUserQuery.fulfilled]: (state, action) => {
      if (action.payload.data.status === 200) {
        state.userPasswordIsLoading = false;
        state.isUserChangePassword = true;
      } else {
        state.userPasswordIsLoading = false;
        state.userError = action.payload.message;
      }
    },
    [editPasswordUserQuery.rejected]: (state, action) => {
      state.userPasswordIsLoading = true;
    },
  },
});

export const { clearIsUserFlag } = editPasswordUser.actions;

export default editPasswordUser.reducer;
