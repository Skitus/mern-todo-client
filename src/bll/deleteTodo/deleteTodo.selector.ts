import { createSelector } from 'reselect';

export const deleteTodoSelector = createSelector(
  (state: any) => state,
  (state) => state.deleteTodo,
);
