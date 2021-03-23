import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import { Redirect } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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
        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
          <Tab eventKey="unanswered" title="Unanswered Question">
            <QuestionList customQuestions = {unansweredQuestionsSorted} />
          </Tab>
          <Tab eventKey="answered" title="Answered Question">
            <QuestionList customQuestions = {answeredQuestionsSorted} />
          </Tab>
        </Tabs>
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