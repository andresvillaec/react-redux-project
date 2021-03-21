import {showLoading, hideLoading} from 'react-redux-loading'
import {saveQuestion} from '../utils/api'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTION = 'GET_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const GET_ANSWERED_QUESTIONS = 'GET_ANSWERED_QUESTIONS'
export const GET_UNANSWERED_QUESTIONS = 'GET_UNANSWERED_QUESTIONS'

function createQuestion (question) {
  return {
    type: CREATE_QUESTION,
    question
  }
}

export function loadQuestions (questions) {
  return {
    type: LOAD_QUESTIONS,
    questions
  }
}

export function getQuestion (id) {
  return {
    type: GET_QUESTION,
    id
  }
}

export function saveAnswer (question) {
  return {
    type: SAVE_ANSWER,
    question
  }
}

export function getAnsweredQuestions () {
  return {
    type: GET_ANSWERED_QUESTIONS,
  }
}

export function getUnansweredQuestions () {
  return {
    type: GET_UNANSWERED_QUESTIONS,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((newQuestion) => dispatch(createQuestion(newQuestion)))
      .then(() => dispatch(hideLoading()))
  }
}