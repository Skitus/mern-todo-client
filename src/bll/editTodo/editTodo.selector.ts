import { createSelector } from 'reselect';

export const editTodoSelector = createSelector(
  (state: any) => state,
  (state) => state.editTodo,
);
