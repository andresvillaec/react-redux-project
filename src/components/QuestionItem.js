import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            <button>View Poll</button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(QuestionItem)