import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    const {authedUser} = this.props
    const isLoggedIn = authedUser === null ? false : true
    if (isLoggedIn === false) {
      return <Redirect to={'/login?redirect=not-found'} />
    }

    return (
      <div>
        Not Found
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  };
}

export default connect(
  mapStateToProps,
)(PageNotFound);
