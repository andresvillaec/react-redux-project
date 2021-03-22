import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Homepage from './Homepage'
import NewQuestion from './NewQuestion'
import QuestionAnswer from './QuestionAnswer'
import LoadingBar from 'react-redux-loading'
import PageNotFound from './PageNotFound'
import LeaderBoard from './LeaderBoard'
import QuestionResponse from './QuestionResponse'
import Login from './Login'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='container'>
        <LoadingBar/> 
        <Router>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/new" component={NewQuestion}/>
            <Route exact path="/leader-board" component={LeaderBoard}/>
            <Route exact path="/question/:id" component={QuestionAnswer}/>
            <Route exact path="/answer/:id" component={QuestionResponse}/>
            <Route exact path="/login" component={Login}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect()(App)