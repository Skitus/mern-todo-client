import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { ITodoForm } from '../../types/interfaces';

interface ICreateTodo {
    userId: string,
    copyValues: ITodoForm
}

export const createTodoQuery: any = createAsyncThunk(
  'createTodo/createTodoQuery',
  async ({ copyValues, userId }: ICreateTodo) => await http.createTodo(copyValues, userId),
);

export const createTodo = createSlice({
  name: 'createTodo',
  initialState: {
    todosData: [],
    todosIsLoading: true,
  },
  reducers: {},
  extraReducers: {
    [createTodoQuery.pending]: (state, action) => {
      state.todosIsLoading = true;
    },
    [createTodoQuery.fulfilled]: (state, action) => {
      state.todosData = action.payload;
      state.todosIsLoading = false;
    },
    [createTodoQuery.rejected]: (state, action) => {
      state.todosIsLoading = false;
    },
  },
});

export default createTodo.reducer;
