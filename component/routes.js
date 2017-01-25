
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import TabLinks from '../component/login'
import TabsContents from '../component/register'
import AdminComponent from '../component/admin'
import App from '../component/app'



export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/admin" component={AdminComponent}>
          <Route path="/games" component={App}/>
        </Route>
      </Router>
    )
  }
});