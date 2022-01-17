import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';
import { IFilterForm } from '../../types/interfaces';

interface IListOfTodos {
    userId: string,
    values: IFilterForm,
    todosCurrentPage: number,
    todosPerPage: number
}

export const fetchTodos: any = createAsyncThunk(
  'listOfTodos/fetchTodos',
  async ({
    userId,
    values,
    todosCurrentPage,
    todosPerPage,
  }: IListOfTodos) => await http.getAllTodos(userId, values, todosCurrentPage, todosPerPage),
);

export const listOfTodos = createSlice({
  name: 'listOfTodos',
  initialState: {
    todosData: [],
    todosIsLoading: true,
    todosCurrentPage: 1,
    todosPerPage: 4,
    todosTotalCount: 0,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.todosCurrentPage = action.payload;
    },
    setPerPage(state, action) {
      state.todosPerPage = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.todosIsLoading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todosData = action.payload.data.todos;
      state.todosTotalCount = action.payload.data.totalCount;
      state.todosIsLoading = false;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.todosIsLoading = false;
    },
  },
});

export const { setCurrentPage, setPerPage } = listOfTodos.actions;

export default listOfTodos.reducer;
