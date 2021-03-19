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

    console.log('Render App.js')
    console.log(questions)

    if (questions && questions.length > 0){
      questions.map((question) => (
        console.log('Map' + question)
      ))
    }

    return (
      <div>
        <div className='container'>
          <LoadingBar/> 
          <QuestionList questions = {questions} />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions}){
  console.log('Map State to props App.js')
  console.log(questions)
  return {
    loading: questions === null,
    questions: questions === {} ? [] : questions
  }
}

export default connect(mapStateToProps)(App)