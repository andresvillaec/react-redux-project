import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from "react-router-dom";

function mapStateToProps ({ authedUser, users }, {question}) {
  return {
    user: authedUser ? users[authedUser] : {},
    question
  }
}

class QuestionItem extends Component {
  render() {
    const {question, user} = this.props
    const {optionOne} = question
    const {name, avatarURL} = user
    const to = '/' + question.id

    return (
      <div>
        <p>{name}</p>
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
            <Link to={to}>View Poll</Link>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(QuestionItem)