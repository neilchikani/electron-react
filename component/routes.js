
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import TabLinks from '../component/login.js'
import TabsContents from '../component/register.js'
import AdminComponent from '../component/admin.js'
import UserComponent from '../component/user.js'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabLinks} />
        <Route path="/login" component={TabLinks}/>
        <Route path="/register" component={TabsContents}/>
        <Route path="/admin" component={AdminComponent}/>
        <Route path="/user" component={UserComponent}/>
      </Router>
    )
  }
});