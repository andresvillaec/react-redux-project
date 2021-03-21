import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Homepage from './Homepage'
import NewQuestion from './NewQuestion'
import QuestionAnswer from './QuestionAnswer'
import LoadingBar from 'react-redux-loading'
import PageNotFound from './PageNotFound'
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
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/question/new" component={NewQuestion}/>
            <Route path="/:id" component={QuestionAnswer}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect()(App)