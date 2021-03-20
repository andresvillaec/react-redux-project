export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTION = 'GET_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const GET_ANSWERED_QUESTIONS = 'GET_ANSWERED_QUESTIONS'
export const GET_UNANSWERED_QUESTIONS = 'GET_UNANSWERED_QUESTIONS'

export function loadQuestions (questions) {
  return {
    type: LOAD_QUESTIONS,
    questions
  }
}

export function createQuestion (question) {
  return {
    type: CREATE_QUESTION,
    question
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