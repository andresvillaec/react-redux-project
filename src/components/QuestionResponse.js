import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'

function mapStateToProps({users, questions, authedUser}, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] :{}
  const author = users && question ? users[question.author] : {}

  return {
    question,
    author, 
    authedUser,
    id
  }
}

class QuestionResponse extends Component {
  render() {
    const {question, author, authedUser, id} = this.props
    const isLoggedIn = authedUser === null ? false : true
    const url = 'answer/' + id
    if (isLoggedIn === false) {
      return <Redirect to={'/login?redirect=' + url} />
    }

    if (!question) {
      return <Redirect to={'/not-found'} />
    }
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = author

    const optionOneCounter = optionOne.votes.length
    const optionTwoCounter = optionTwo.votes.length
    const counter = optionOneCounter + optionTwoCounter;
    const optionOnePercentage = Math.round((optionOneCounter / counter) * 100);
    const optionTwoPercentage = Math.round((optionTwoCounter / counter) * 100);

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
              <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
              <p>{optionOneCounter} out of {counter} votes</p>
            </div>
            <div className="box">
              <p>{optionTwo.text}</p>
              <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
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