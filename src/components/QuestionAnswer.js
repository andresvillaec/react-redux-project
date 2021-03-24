import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveAnswer} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function mapStateToProps({questions, users, authedUser}, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] : null
  return {
    question: question,
    user: users[authedUser],
    author: users && question ? users[question.author] : {},
    authedUser,
    id
  };
}

class QuestionAnswer extends Component {
  state = {
    optionSelected: '',
    isAnswered: false,
  }

  handleChange = (e) => {
    const optionSelected = e.target.value

    this.setState(() => ({
      optionSelected
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionSelected } = this.state
    const { dispatch, question } = this.props

    const answer = optionSelected
    const qid = question.id
    dispatch(handleSaveAnswer(qid, answer))

    this.setState(() => ({
      isAnswered: true,  
    }))
  }

  render() {
    const {question, user, author, authedUser, id} = this.props
    const to = 'questions/' + id
    const isLoggedIn = authedUser === null ? false : true
    
    if (isLoggedIn === false) {
      return <Redirect to={'/login?redirect=' + to} />
    }
    
    if (!question) {
      return <Redirect to={'/not-found'} />
    }

    const {isAnswered} = this.state
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = author
    const toAnswer = '/answer/'+ id

    if (isAnswered === true) {
      return <Redirect to={toAnswer} />
    }

    const alreadyResponse = Object.keys(user.answers).includes(question.id)
    if (alreadyResponse === true) {
      return <Redirect to={toAnswer} />
    }

    return (
      <div>
        <p>{name} asks:</p>
        <div>
          <div>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='avatar'/>
          </div>
          <div>
            <h3>Would you rather</h3> 
            <form onSubmit={this.handleSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    checked={this.state.optionSelected === "optionOne"}
                    onChange={this.handleChange}
                  />
                  {`${optionOne.text}`}
                </label>
              </div>
              <div className="radio">
              <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    checked={this.state.optionSelected === "optionTwo"}
                    onChange={this.handleChange}
                  />
                  {`${optionTwo.text}`}
                </label>
              </div>
              <Button
                className='btn'
                type='submit'
                disabled={this.state.optionSelected === ''}>
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(QuestionAnswer);