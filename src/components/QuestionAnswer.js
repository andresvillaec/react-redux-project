import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveAnswer} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function mapStateToProps({questions, users, authedUser}, props) {
  const { id } = props.match.params
  const question = questions[id]
  return {
    question: question,
    user: users[authedUser],
    author: users && question ? users[question.author] : {}
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
    const {question, user, author} = this.props
    
    if (!question) {
      return <Redirect to={'/login'} />
    }

    const {isAnswered} = this.state
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = author
    const to = '/answer/' + question.id

    if (isAnswered === true) {
      return <Redirect to={to} />
    }

    const alreadyResponse = Object.keys(user.answers).includes(question.id)
    if (alreadyResponse === true) {
      return <Redirect to={to} />
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