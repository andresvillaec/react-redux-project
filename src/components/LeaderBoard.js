import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import LeaderBoardItem from './LeaderBoardItem'

function mapStateToProps({users, authedUser}) {
  const userArray = Object.values(users)
  userArray.map( (user) => user.score = Object.keys(user.answers).length + user.questions.length )
  const sortedUsers = userArray.sort( (a, b) => b.score - a.score)

  return {
    users : sortedUsers,
    authedUser
  };
}

class LeaderBoard extends Component {
  render() {
    const {users, authedUser} = this.props
    const isLoggedIn = authedUser === null ? false : true
    if (isLoggedIn === false) {
      return <Redirect to={'/login'} />
    }
    
    return (
      <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <LeaderBoardItem user = {user}/>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(LeaderBoard);