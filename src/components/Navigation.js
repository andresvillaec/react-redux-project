import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import {logoutUser} from '../actions/authedUser'
import Nav from 'react-bootstrap/Nav'

function mapStateToProps({users, authedUser}) {
  return {
    user:  users ? users[authedUser] :{},
    authedUser
  };
}

class Navigation extends Component {
  handleClick = (e) => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    const {user, authedUser} = this.props
    // const {name, avatarURL} = user
    const isLoggedIn = authedUser === null ? false : true

    return (
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink eventKey="home" to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink eventKey="new" to='/add'>
              New Question
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink eventKey="leaderboard" to='/leaderboard'>
              Leaderboard
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            {isLoggedIn ? 
            <li>
              <span>Hello, {user.name} </span>
              <NavLink
              eventKey="home"
              onClick={this.handleClick} 
              to='/'
              >
                Logout
              </NavLink>
            </li> :
            <li>
              <NavLink eventKey="login" to='/login'>
                Login
              </NavLink>
            </li>
            }
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Navigation);
