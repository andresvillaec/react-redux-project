import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleChangeOptionOne = (e) => {
    const optionOne = e.target.value
  
    this.setState(() => ({
      optionOne
    }))
  }
  
  handleChangeOptionTwo = (e) => {
    const optionTwo = e.target.value
  
    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div>
        <div>
          <h3>Create New Question</h3>
        </div>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <p>Complete the question:</p>
          <h4>Would you rather...</h4>
          <div>
            <input
              type='text'
              onChange={this.handleChangeOptionOne}
              value={optionOne}
            />
          </div>
          <div>
            <input
              type='text'
              onChange={this.handleChangeOptionTwo}
              value={optionTwo}
            />
          </div>
          <button
            className='btn'
            type='submit'
            disabled={optionOne === ''}>
              Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion)