import React from 'react'
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Router = require('react-router');
const LogoutDropDown = React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
    Router.hashHistory.push('/');
  },

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavDropdown eventKey="4" title={<span><i className="fa fa-user fa-fw"></i></span>
        } id="nav-dropdown">
          <MenuItem eventKey="4.1">Logout</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
});


export default LogoutDropDown;