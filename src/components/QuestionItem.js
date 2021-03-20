import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuestionItem extends Component {

  render() {
    const {question} = this.props
    if(question === null){
      return <p>This question does not exists</p>
    }

    const {optionOne} = question


    return (
      <div>
        {optionOne.text}
        <button>View Poll</button>
      </div>
    );
  }
}

function mapStateToProps ({questions}, { id }) {
  const question = questions[id]

  return {
    question: question
  }
}

export default connect(mapStateToProps)(QuestionItem)