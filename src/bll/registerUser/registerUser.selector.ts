import { createSelector } from 'reselect';

export const registryUserSelector = createSelector(
  (state: any) => state,
  (state) => state.registerUser,
);
