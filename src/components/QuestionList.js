import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionItem from '../components/QuestionItem'

class QuestionList extends Component {
  render() {
    const {questionIds} = this.props
    console.log('Call Question component')
    console.log(questionIds)

    return (
      <div>
      <ul>
        {questionIds.map((id) => (
          <li key={id}>
            <QuestionItem id={id}/>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions) 
  }
}
export default connect(mapStateToProps)(QuestionList)