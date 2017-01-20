import React from 'react';
import { Link } from 'react-router';
var $ = require("jquery");
var baseUrl = 'http://localhost:4000/api/';
var Router = require('react-router');

var TabLinks = React.createClass({

  getInitialState: function () {
    return {
      username: '',
      password:''
    }
  },
  handleChange:function (e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var filter = { "include": "roles" },
      that = this;

    $.ajax({
      url: baseUrl + 'users/login?filter=' + JSON.stringify(filter),
      method: 'POST',
      data: { "username" : this.state.username, "password" : this.state.password },
      success: function (result) {
        $.ajax({
            url: baseUrl + 'Users/'+ result.userId + '?access_token=' + result.id + '&filter=' + JSON.stringify(filter),
            method: 'GET',
            success: function (userInfo) {
              if(('sessionStorage' in window) && window['sessionStorage'] !== null){
                sessionStorage.setItem('username',that.state.username);
                sessionStorage.setItem('userId',result.userId);
                sessionStorage.setItem('roleId',userInfo.roles[0] != undefined ? userInfo.roles[0].id : "");
                sessionStorage.setItem('accesstoken',result.id);

              }
              if(userInfo.roles[0].id == '1'){
                  Router.hashHistory.push('/admin');
                }else{
                  Router.hashHistory.push('/user');
                }
            },
            error: function (r) {
                alert('Error in getting role');
            }
        });
      },
      error: function (r) {
        alert('Error in getting user information');
      }

    });
  },


  render: function () {
    return (
    <section>
      <div className="container">
        <div className="user-authentication padding-top-45">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <ul className="row">
                    <li className="col-xs-6">
                      <Link activeClassName="active" to="/login">Login</Link>
                    </li>
                    <li className="col-xs-6">
                      <Link activeClassName="active" to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" name="username" className="form-control"
                                 placeholder="Username" defaultValue='' onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" className="form-control"
                                 placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="submit" className="form-control btn btn-login" value="Log In" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
});





export default TabLinks;
