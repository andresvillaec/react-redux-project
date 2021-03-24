import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {loginUser} from '../actions/authedUser'
import Button from 'react-bootstrap/Button'
import QueryString from 'query-string'

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
		isLoggedIn: false,
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedUserId } = this.state;
    const { dispatch } = this.props;
	
		dispatch(loginUser(selectedUserId));
    
    this.setState(() => ({
      isLoggedIn: true,  
    }))
  }

  handleChange = (e) => {
    const selectedUserId = e.target.value;
    this.setState(() => ({
      selectedUserId  
    }))
  }

  render() {
    const { selectedUserId, isLoggedIn } = this.state
    const {users} = this.props 
    const {search} = this.props.location
    const parsedQueryString = QueryString.parse(search);
    const url = parsedQueryString && parsedQueryString['redirect'] ? '/' + parsedQueryString['redirect'] : '/'

    if (isLoggedIn) {
      return <Redirect to={url} />
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