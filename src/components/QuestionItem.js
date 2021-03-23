import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

function mapStateToProps ({ users }, {question}) {
  return {
    author: users ? users[question.author] : {},
    question
  }
}

class QuestionItem extends Component {
  render() {
    const {question, author} = this.props
    const {optionOne} = question
    const {name, avatarURL} = author
    const to = '/questions/' + question.id

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