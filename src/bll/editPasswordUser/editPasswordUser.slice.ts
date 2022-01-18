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
  },
  reducers: {
    clearError(state) {
      state.userError = '';
    },
  },

  extraReducers: {
    [editPasswordUserQuery.pending]: (state, action) => {
      state.userPasswordIsLoading = true;
    },
    [editPasswordUserQuery.fulfilled]: (state, action) => {
      if (action.payload.data.status === 200) {
        state.userPasswordIsLoading = false;
        state.userError = '';
      } else {
        state.userPasswordIsLoading = false;
        state.userError = action.payload.data.message;
      }
    },
    [editPasswordUserQuery.rejected]: (state, action) => {
      state.userPasswordIsLoading = false;
    },
  },
});

export const { clearError } = editPasswordUser.actions;

export default editPasswordUser.reducer;
