import UserActionsTypes from './user.types'

export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = ( user ) => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = ( error ) => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSignInSuccess = ( user ) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = ( error ) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
