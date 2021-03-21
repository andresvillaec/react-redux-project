import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Homepage from './Homepage'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'
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
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/question/new">
              <NewQuestion/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect()(App)