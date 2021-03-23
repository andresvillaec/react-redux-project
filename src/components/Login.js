import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {loginUser} from '../actions/authedUser'
import Button from 'react-bootstrap/Button'

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
            <div>
              <img
                src='http://www.danielledeveloper.com/wp-content/uploads/2018/04/Reactjs-logo-e1523253944211.png'
                alt="Login react project"
                className='avatar'/>
            </div>
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
          <Button
            className='btn'
            type='submit'
            disabled={selectedUserId === 0}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Login);