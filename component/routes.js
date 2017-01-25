import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import TabLinks from './entry/login'
import TabsContents from './entry/register'
import AdminComponent from './admin/index'
import GamesComponent from './admin/gamesComponent'
import LeagueComponent from './admin/leagueComponent'
import TeamComponent from './admin/teamComponent'
import UserComponent from './user/index'
import App from '../component/app'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabLinks} />
        <Route path="/login" component={TabLinks}/>
        <Route path="/register" component={TabsContents}/>
        <Route path="/admin" component={AdminComponent}>
          <IndexRoute component={GamesComponent}/>
          <Route path="/games" component={GamesComponent} />
          <Route path="/games/:user_id" component={GamesComponent}/>
          <Route path="/league" component={LeagueComponent}/>
          <Route path="/teams" component={TeamComponent}/>
        </Route>
        <Route path="/user" component={UserComponent}/>
      </Router>
    )
  }
});