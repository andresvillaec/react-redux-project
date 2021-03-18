import { LOAD_USERS, LOGIN_USER, LOGOUT_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}

export default function loginUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.id
    default:
      return state
  }
}

export default function logoutUser(state = null, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return action.id
    default:
      return state
  }
}