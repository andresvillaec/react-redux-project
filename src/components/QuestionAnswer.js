import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function mapStateToProps({questions, users, authedUser}, props) {
  const { id } = props.match.params
  return {
    question: questions[id],
    user: users[authedUser]
  };
}

class QuestionAnswer extends Component {
  

  render() {
    const {question, user} = this.props
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = user

    console.log(question)
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
          <p>{optionOne.text}</p>
          <p>{optionTwo.text}</p>
          <button>Submit</button>
        </div>
      </div>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(QuestionAnswer);