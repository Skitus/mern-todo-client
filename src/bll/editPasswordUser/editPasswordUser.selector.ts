import { createSelector } from 'reselect';

export const editPasswordUserSelector = createSelector(
  (state: any) => state,
  (state) => state.editPasswordUser,
);
