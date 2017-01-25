import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import TabLinks from './entry/login'
import TabsContents from './entry/register'
import AdminComponent from './admin/admin'
import GamesComponent from './admin/gamesComponent'
import LeagueComponent from './admin/leagueComponent'
import TeamComponent from './admin/teamComponent'
import UserComponent from './user/user'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabLinks} />
        <Route path="/login" component={TabLinks}/>
        <Route path="/register" component={TabsContents}/>
        <Route path="/admin" component={AdminComponent}>
          <Route path="/games" component={GamesComponent}/>
          <Route path="/league" component={LeagueComponent}/>
          <Route path="/team" component={TeamComponent}/>
        </Route>
        <Route path="/user" component={UserComponent}/>
      </Router>
    )
  }
});