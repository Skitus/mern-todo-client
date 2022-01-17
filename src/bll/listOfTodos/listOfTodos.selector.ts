import { createSelector } from 'reselect';

export const listOfTodosSelector = createSelector(
  (state: any) => state,
  (state) => state.listOfTodos,
);

export const pagesCountSelector = createSelector(
  listOfTodosSelector,
  ({ todosTotalCount, todosPerPage }) => Math.ceil(todosTotalCount / todosPerPage),
);
