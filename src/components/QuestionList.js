import React, { Component } from 'react';
import QuestionItem from '../components/QuestionItem'

class QuestionList extends Component {
  render() {
    const {customQuestions} = this.props

    return (
      <div>
      <ul>
        {customQuestions.map((question) => (
          <li key={question.id}>
            <QuestionItem question={question}/>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

export default QuestionList