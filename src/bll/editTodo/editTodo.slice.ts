import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { ITodoForm } from '../../types/interfaces';

interface IEditTodo {
    _id: string,
    copyValues: ITodoForm
}

export const editTodoQuery: any = createAsyncThunk(
  'editTodo/editTodoQuery',
  async ({ copyValues, _id }: IEditTodo) => await http.editTodo(copyValues, _id),
);

export const createTodo = createSlice({
  name: 'editTodo',
  initialState: {
    todosData: [],
    todosIsLoading: true,
  },
  reducers: {},
  extraReducers: {
    [editTodoQuery.pending]: (state, action) => {
      state.todosIsLoading = true;
    },
    [editTodoQuery.fulfilled]: (state, action) => {
      state.todosData = action.payload;
      state.todosIsLoading = false;
    },
    [editTodoQuery.rejected]: (state, action) => {
      state.todosIsLoading = false;
    },
  },
});

export default createTodo.reducer;
