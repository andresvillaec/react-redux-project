import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { questions } = this.props

    return (
      <div>
        <div className='container'>
          <LoadingBar/> 
          <h3>Unanswered Questions</h3>
          <QuestionList questions = {questions} />
          <h3>Answered Questions</h3>
          <QuestionList questions = {questions} />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions}){
  return {
    loading: questions === null,
    questions: questions,
  }
}

export default connect(mapStateToProps)(App)