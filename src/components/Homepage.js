import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import { Redirect, withRouter } from 'react-router-dom'

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

    const questionsArray = Object.values(questions)
    const answeredQuestions = questionsArray.filter(function(question) {
      return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    });

    const unansweredQuestions = questionsArray.filter(function(question) {
      return !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    });

    return (
      <div>
        <div className='container'>
          <h3>Unanswered Questions</h3>
          <QuestionList customQuestions = {answeredQuestions} />
          <h3>Answered Questions</h3>
          <QuestionList customQuestions = {unansweredQuestions} />
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