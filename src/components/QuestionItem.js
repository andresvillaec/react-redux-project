import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

function mapStateToProps ({ users, questions}, {id}) {
  const question = questions ? questions[id] : {}
  console.log(question)
  return {
    author: users ? users[question.author] : {},
    question,
    id,
  }
}

class QuestionItem extends Component {
  render() {
    const {question, author, id} = this.props
    const {optionOne} = question
    const {name, avatarURL} = author
    const to = '/questions/' + id

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