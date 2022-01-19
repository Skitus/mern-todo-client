import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';

export const deleteQuery: any = createAsyncThunk(
  'deleteTodos/fetchTodos',
  async (id: string) => { await http.deleteTodo(id); },
);

export const deleteTodo = createSlice({
  name: 'deleteTodos',
  initialState: {
    deleteIsLoading: true,
  },
  reducers: {},
  extraReducers: {
    [deleteQuery.pending]: (state, action) => {
      state.deleteIsLoading = true;
    },
    [deleteQuery.fulfilled]: (state, action) => {
      state.deleteIsLoading = false;
    },
    [deleteQuery.rejected]: (state, action) => {
      state.deleteIsLoading = false;
    },
  },
});

export default deleteTodo.reducer;
