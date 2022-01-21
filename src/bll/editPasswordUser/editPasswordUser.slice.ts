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
    userPasswordIsLoading: false,
    userError: '',
    userSuccessMessage: '',
  },
  reducers: {
    clearSuccessMessage(state) {
      state.userSuccessMessage = '';
    },
  },

  extraReducers: {
    [editPasswordUserQuery.pending]: (state, action) => {
      state.userPasswordIsLoading = true;
      state.userError = '';
      state.userSuccessMessage = '';
    },
    [editPasswordUserQuery.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        state.userPasswordIsLoading = false;
        state.userSuccessMessage = action.payload.message;
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

export const { clearSuccessMessage } = editPasswordUser.actions;

export default editPasswordUser.reducer;
