import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { ILoginForm } from '../../types/interfaces';

export const loginQuery: any = createAsyncThunk(
  'loginUser/loginQuery',
  async (values: ILoginForm) => await http.loginUser(values),
);

export const loginUser = createSlice({
  name: 'loginUser',
  initialState: {
    userIsLoading: false,
    userToken: JSON.parse(<string>localStorage.getItem('token')),
    userId: JSON.parse(<string>localStorage.getItem('userId')),
    userName: JSON.parse(<string>localStorage.getItem('user_name')),
    userError: '',
  },

  reducers: {
    logout(state) {
      state.userId = '';
      state.userToken = '';
      localStorage.clear();
    },
  },

  extraReducers: {
    [loginQuery.pending]: (state, action) => {
      state.userIsLoading = true;
    },
    [loginQuery.fulfilled]: (state, action) => {
      if (action.payload.data.status === 200) {
        state.userToken = action.payload.data.token;
        state.userId = action.payload.data.user;
        state.userName = action.payload.data.username;
        localStorage.setItem('token', JSON.stringify(state.userToken));
        localStorage.setItem('userId', JSON.stringify(state.userId));
        localStorage.setItem('user_name', JSON.stringify(state.userName));
        state.userIsLoading = false;
      } else {
        state.userIsLoading = false;
        state.userError = action.payload.data.message;
      }
    },
    [loginQuery.rejected]: (state, action) => {
      state.userIsLoading = false;
      state.userError = action.payload.data.message;
    },
  },
});

export const { logout } = loginUser.actions;

export default loginUser.reducer;
