import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveAnswer} from '../actions/questions'
import { Redirect, withRouter } from 'react-router-dom'

function mapStateToProps({questions, users, authedUser}, props) {
  const { id } = props.match.params
  return {
    question: questions[id],
    user: users[authedUser]
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
    console.log(optionSelected)
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
    const {question, user} = this.props
    const {isAnswered} = this.state
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = user

    if (isAnswered === true) {
      return <Redirect to='/answer' />
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
              <button
              className='btn'
              type='submit'
              disabled={this.state.optionSelected === ''}>
                Submit
            </button>
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