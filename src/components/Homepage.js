import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import { Redirect } from 'react-router-dom'

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { questions, authedUser } = this.props
    const isLoggedIn = authedUser === null ? false : true
    if (isLoggedIn === false) {
      return <Redirect to={'/login'} />
    }

    const answeredQuestions = Object.values(questions).filter(function(question) {
      return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    });
    const answeredQuestionsSorted = answeredQuestions.sort( (a, b) => b.timestamp - a.timestamp);

    const unansweredQuestions = Object.values(questions).filter(function(question) {
      return !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    });
    const unansweredQuestionsSorted = unansweredQuestions.sort( (a, b) => b.timestamp - a.timestamp);

    return (
      <div>
        <div className='container'>
          <h3>Unanswered Questions</h3>
          <QuestionList customQuestions = {unansweredQuestionsSorted} />
          <h3>Answered Questions</h3>
          <QuestionList customQuestions = {answeredQuestionsSorted} />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions, authedUser}){
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Homepage)