import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem'

function mapStateToProps({users}) {
  const userArray = Object.values(users)
  userArray.map( (user) => user.score = Object.keys(user.answers).length + user.questions.length )
  const sortedUsers = userArray.sort( (a, b) => b.score - a.score)

  return {
    users : sortedUsers
  };
}

class LeaderBoard extends Component {
  render() {
    const {users} = this.props
    
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