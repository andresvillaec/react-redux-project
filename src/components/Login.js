import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {loginUser} from '../actions/authedUser'

function mapStateToProps({users, authedUser}) {
  const userArray = Object.values(users)
  return {
    users: userArray,
    authedUser
  };
}

class Login extends Component {
  state = {
		selectedUserId: 0,
		toHome: false,
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedUserId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(loginUser(selectedUserId));
    
    this.setState(() => ({
      toHome: true,  
    }))
  }

  handleChange = (e) => {
    const selectedUserId = e.target.value;
    this.setState(() => ({
      selectedUserId  
    }))
  }

  render() {
    const { selectedUserId, toHome } = this.state
    const {users} = this.props 

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <div>
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div>
            <img
              src='https://gravatar.com/avatar/5f86fed648ac1a785fb5b2409712c070?s=200&d=robohash&r=x'
              alt="Login react project"
              className='avatar'/>
            <select id="users" value={selectedUserId} onChange={this.handleChange}>
              <option disabled value="0">Select user</option>
              {users.map(function(user) {
                return (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                );
						  })}
            </select>
          </div>
          <button
            className='btn'
            type='submit'
            disabled={selectedUserId === 0}>
              Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Login);