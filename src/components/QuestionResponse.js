import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({users, questions}, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] :{}
  const author = users ? users[question.author] : {}

  return {
    question,
    author
  }
}

class QuestionResponse extends Component {
  render() {
    const {question, author} = this.props
    const {optionOne, optionTwo} = question
    const {name, avatarURL} = author

    return (
      <div>
        <p>Asked by{name}</p>
        <div>
          <div>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='avatar'/>
              </div>
          <div>
            <h3>Results</h3>
            <div>
              <p>{optionOne.text}</p>
            </div>
            <div>
              <p>{optionTwo.text}</p>
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