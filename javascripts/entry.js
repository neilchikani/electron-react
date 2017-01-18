require('../less/main.less');

'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import TabLinks from '../component/login.js'
import TabsContents from '../component/register.js'
import App from '../component/app.js'
import Modal from '../component/modal.js'
import AdminComponent from '../component/admin.js'
import UserComponent from '../component/user.js'
import { Router, Route, hashHistory } from 'react-router'




ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={TabLinks} />
      <Route path="/login" component={TabLinks}/>
      <Route path="/register" component={TabsContents}/>
      <Route path="/admin" component={AdminComponent}/>
    <Route path="/user" component={UserComponent}/>
  </Router>


), document.getElementById('wrapper'));