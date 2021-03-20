import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import LoadingBar from 'react-redux-loading'

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { answeredQuestions, unAnsweredQuestions } = this.props

    return (
      <div>
        <div className='container'>
          <LoadingBar/> 
          <h3>Unanswered Questions</h3>
          <QuestionList questions = {unAnsweredQuestions} />
          <h3>Answered Questions</h3>
          <QuestionList questions = {answeredQuestions} />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions}){
  return {
    loading: questions === null,
    answeredQuestions: questions,
    unAnsweredQuestions: questions,
  }
}

export default connect(mapStateToProps)(Homepage)