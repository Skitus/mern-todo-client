import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';

export const verifyPasswordUserQuery: any = createAsyncThunk(
  'verifyPasswordUser/verifyPasswordUserQuery',
  async ({ id, token }: any) => await http.verifyPasswordUser(id, token),
);

export const verifyPasswordUser = createSlice({
  name: 'verifyPasswordUser',
  initialState: {
    userPasswordIsLoading: true,
    userIsValidUrl: false,
    userError: '',
  },
  reducers: {
  },

  extraReducers: {
    [verifyPasswordUserQuery.pending]: (state, action) => {
      state.userError = '';
    },
    [verifyPasswordUserQuery.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      if (action.payload.data.status === 200) {
        state.userPasswordIsLoading = false;
        state.userIsValidUrl = true;
      } else {
        state.userPasswordIsLoading = false;
        state.userIsValidUrl = false;
        state.userError = action.payload.message;
      }
    },
    [verifyPasswordUserQuery.rejected]: (state, action) => {
      state.userPasswordIsLoading = true;
    },
  },
});


export default verifyPasswordUser.reducer;
