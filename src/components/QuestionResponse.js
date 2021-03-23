import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

function mapStateToProps({users, questions}, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] :{}
  const author = users && question ? users[question.author] : {}

  return {
    question,
    author
  }
}

class QuestionResponse extends Component {
  render() {
    const {question, author} = this.props
    if (!question) {
      return <Redirect to={'/login'} />
    }
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = author

    const optionOneCounter = optionOne.votes.length
    const optionTwoCounter = optionTwo.votes.length
    const counter = optionOneCounter + optionTwoCounter;

    return (
      <div>
        <h3>Asked by{name}</h3>
        <div>
          <div>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='avatar'/>
              </div>
          <div>
            <h5>Results</h5>
            <div className="box">
              <p>{optionOne.text}</p>
              <p>{optionOneCounter} out of {counter} votes</p>
            </div>
            <div className="box">
              <p>{optionTwo.text}</p>
              <p>{optionTwoCounter} out of {counter} votes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(QuestionResponse);