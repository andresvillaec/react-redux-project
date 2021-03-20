import React, { Component } from 'react'

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

export default QuestionItem