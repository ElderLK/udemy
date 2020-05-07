import UserActionsTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionsTypes.SET_CURRENT_USER:
    case UserActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionsTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default userReducer;