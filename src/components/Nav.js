import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import {logoutUser} from '../actions/authedUser'

function mapStateToProps({users, authedUser}) {
  return {
    user:  users ? users[authedUser] :{},
    authedUser
  };
}

class Nav extends Component {
  handleClick = (e) => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    const {user, authedUser} = this.props
    // const {name, avatarURL} = user
    const isLoggedIn = authedUser === null ? false : true

    return (
      <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        { isLoggedIn && <li>
          <NavLink to='/new'>
            New Question
          </NavLink>
        </li>
        }
        <li>
          <NavLink to='/leader-board'>
            Leader Board
          </NavLink>
        </li>
        {isLoggedIn ? 
        <li>
          <span>Hello, {user.name} </span>
          <NavLink
           onClick={this.handleClick} 
           to='/'
           >
            Logout
          </NavLink>
        </li> :
        <li>
          <NavLink to='/login'>
            Login
          </NavLink>
        </li>
        }
      </ul>
    </nav>
    );
  }
}

export default connect(
  mapStateToProps,
)(Nav);
