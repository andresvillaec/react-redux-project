import { LOAD_QUESTIONS } from '../actions/questions'

export default function questions (state = {}, action) {
  console.log('Call Question reducer')
  switch(action.type) {
    case LOAD_QUESTIONS :
      console.log('question reducer' + action)
      return {
        ...state,
        ...action.questions
      }
    default :
      return state
  }
}