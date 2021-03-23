import React, { Component } from 'react'

export default class LeaderBoardItem extends Component {
  render() {
    const {user} = this.props
    const {name, avatarURL, score} = user
    const answeredCounter = Object.keys(user.answers).length
    const questionsCounter = user.questions.length

    return (
      <div>
        <div>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'/>
            </div>
        <div>
          <div>
            <h3>{name}</h3>
            <p>Answered Questions{answeredCounter}</p>
            <p>Created Questions{questionsCounter}</p>
          </div>
          <div>
            <p>Score</p>
            <p>{score}</p>
          </div>
        </div>
      </div>
    )
  }
}
