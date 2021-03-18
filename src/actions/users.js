export const LOAD_USERS = 'LOAD_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function loadUsers () {
  return {
    type: LOAD_USERS,
  }
}

export function loginUsers (id) {
  return {
    type: LOGIN_USER,
    id
  }
}

export function logoutUsers (id) {
  return {
    type: LOGOUT_USER,
    id
  }
}