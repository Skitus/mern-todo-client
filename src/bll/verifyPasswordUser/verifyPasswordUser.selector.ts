import { createSelector } from 'reselect';

export const verifyPasswordUserSelector = createSelector(
  (state: any) => state,
  (state) => state.verifyPasswordUser,
);
