import { createSelector } from 'reselect';

export const loginUserSelector = createSelector(
  (state: any) => state,
  (state) => state.loginUser,
);
