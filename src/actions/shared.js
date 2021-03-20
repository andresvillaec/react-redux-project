
import { getInitialData } from '../utils/api'
import { loadUsers } from '../actions/users'
import { loadQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { loginUser } from './authedUser'

const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(loadUsers(users))
        dispatch(loadQuestions(questions))
        dispatch(hideLoading())
        dispatch(loginUser(AUTHED_ID))
      })
  }
}