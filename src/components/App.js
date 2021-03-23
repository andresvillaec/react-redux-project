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
import Navigation from './Navigation'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='container'>
        <LoadingBar/> 
        <Router>
          <Navigation/>
          <div className="container-small">
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/add" component={NewQuestion}/>
              <Route exact path="/leaderboard" component={LeaderBoard}/>
              <Route exact path="/questions/:id" component={QuestionAnswer}/>
              <Route exact path="/answer/:id" component={QuestionResponse}/>
              <Route exact path="/login" component={Login}/>
              <Route path="*" component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect()(App)