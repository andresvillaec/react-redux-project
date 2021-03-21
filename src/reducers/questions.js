import { LOAD_QUESTIONS, CREATE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case LOAD_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case CREATE_QUESTION :
        const{question} = action
        return {
          ...state,
          [question.id]: question,
        }
    default :
      return state
  }
}