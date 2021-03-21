import {showLoading, hideLoading} from 'react-redux-loading'
import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTION = 'GET_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

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

export function saveAnswer (response) {
  return {
    type: SAVE_ANSWER,
    response
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

export function handleSaveAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestionAnswer({ 
      authedUser, 
      qid, 
      answer 
    })
      .then((newQuestion) => dispatch(saveAnswer(newQuestion)))
      .then(() => dispatch(hideLoading()))
  }
}