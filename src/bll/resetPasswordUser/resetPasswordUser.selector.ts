import { createSelector } from 'reselect';

export const resetPasswordUserSelector = createSelector(
  (state: any) => state,
  (state) => state.resetPasswordUser,
);
