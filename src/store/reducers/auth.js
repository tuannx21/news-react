import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../actions"

const initialState = {
  currentUser: {},
  isProcessing: false,
  isError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
      return { ...state, isProcessing: true }
    case LOGIN_SUCCESS:
      return { ...state, currentUser: action.user, isProcessing: false }
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return { ...state, isError: action.error, isProcessing: false }
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: {}, isProcessing: false}
    default:
      return state
  }
}

export default authReducer