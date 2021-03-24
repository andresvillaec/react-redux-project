import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Redirect } from 'react-router-dom'

function mapStateToProps ({ users, questions, authedUser}, {id}) {
  const question = questions ? questions[id] : {}
  return {
    author: users ? users[question.author] : {},
    question,
    id,
    authedUser,
  }
}

class QuestionItem extends Component {
  render() {
    const {question, author, id, authedUser} = this.props
    const {optionOne} = question
    const {name, avatarURL} = author
    const to = '/questions/' + id

    const isLoggedIn = authedUser === null ? false : true
    
    if (isLoggedIn === false) {
      return <Redirect to={'/login?redirect=' + to} />
    }

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