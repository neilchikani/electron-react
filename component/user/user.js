import React from 'react';
import { Link } from 'react-router'
import Modal from './modal.js'
import LogoutDropDown from './logoutDropDown.js'
import UserBetForm from './userBetForm'

var UserComponent = React.createClass({
  getInitialState:function () {
    return{
      data: "this data is for modal data"
    }
  },

  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Welcome <span id="hypUserName"></span></a>
          </div>
          <div className="navbar-top-links navbar-right">
            <LogoutDropDown/>
          </div>
          <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
              <ul className="nav in" id="side-menu">

                <li>
                  <a href="index.html" className="active">  Links </a>
                </li>

                <li>
                  <a href="tables.html"> Links</a>
                </li>
                <li>
                  <a href="forms.html"> Links</a>
                </li>
                <li>
                  <a href="#">  Multilevel Links<span className="fa arrow"></span></a>
                  <ul className="nav nav-second-level collapse">
                    <li>
                      <a href="panels-wells.html">Links</a>
                    </li>
                    <li>
                      <a href="buttons.html">Links</a>
                    </li>
                    <li>
                      <a href="notifications.html">Links</a>
                    </li>

                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div id="page-wrapper">
          <div className="row">
            <div className="margin-top-20">
              <div className="panel panel-default">
                <div className="panel-heading clearfix">
                  <div className="pull-left">
                    <h3 className="no-margin padding-top-5"> My Bets </h3>
                  </div>
                  <div className="pull-right">
                    <Modal heading="User Bet Form" buttonTitle="Make a new Bet">
                      <UserBetForm/>
                    </Modal>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table id="tblMyBets" className="table table-bordered table-hover table-striped">
                          <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Event</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Bet Type</th>
                            <th>Points</th>
                            <th>Status</th>
                            <th>Is Challenged?</th>
                            <th>Result</th>
                          </tr>
                          </tfoot>
                        </table>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="no-margin padding-top-5"> Challenge other bets </h3>
                  <div className="pull-right">
                    <div className="btn-group"></div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table id="tblChallengeBets" className="table table-bordered table-hover table-striped">
                          <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Event</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Bet Type</th>
                            <th>Points</th>
                            <th>Status</th>
                          </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});




export default UserComponent;