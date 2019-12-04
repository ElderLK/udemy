import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrenteUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
