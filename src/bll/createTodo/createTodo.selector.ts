import { createSelector } from 'reselect';

export const createTodoSelector = createSelector(
  (state: any) => state,
  (state) => state.createTodo,
);
